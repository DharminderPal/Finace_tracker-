import React from "react";
import { useState, useEffect } from "react";
import { Modal, Tag } from 'antd';
import Header from '../component/Header';
import Cards from '../component/Cards/Cards';
import AddExpenseModal from "../component/Modal/addexpens";
import AddIncomeModal from "../component/Modal/Addincome";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { addDoc, collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";
import Item from "antd/es/list/Item";
import TransactionsTable from "../component/TransactionsTable";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const [isExpenseModelVisible, setIsExpenseModelVisible] = useState(false);
  const [isIncomeModelVisible, setIsIncomeModelVisible] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const showIncomeModel = () => {
    setIsIncomeModelVisible(true);
  };

  const showExpenseModel = () => {
    setIsExpenseModelVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModelVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModelVisible(false);
  };

  const onFinish = (values, type) => {
    const newTransaction = {
      type,
      date: moment(values.date).format("YYYY-MM-DD"),
      amount: parseFloat(values.amount),
      tag: values.tag,
      name: values.name,
    };
    addTransaction(newTransaction);
  };

  async function addTransaction(transaction) {
    try {
      if (!transaction || !user) {
        toast.error("Invalid transaction data or user not authenticated");
        return;
      }

      const docRef = await addDoc(
        collection(db, `users/${user.uid}/transactions`),
        transaction
      );

      console.log("Document created with ID: ", docRef.id);
      toast.success("Transaction added successfully");
      
      // FIXED: Correctly update transactions array
      setTransactions(prevTransactions => [...prevTransactions, {...transaction, id: docRef.id}]);
      
      setIsExpenseModelVisible(false);
      setIsIncomeModelVisible(false);

    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error adding transaction");
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  useEffect(() => {
    sumBal();
  }, [transactions]);

  function sumBal() {
    let incomeTotal = 0;
    let expenseTotal = 0;
    
    // FIXED: Add safety check to ensure transactions is an array
    if (Array.isArray(transactions)) {
      transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          incomeTotal += transaction.amount;
        } else if (transaction.type === 'expense') {
          expenseTotal += transaction.amount;
        }
      });
    }

    setIncome(incomeTotal);
    setExpense(expenseTotal);
    setTotalBalance(incomeTotal - expenseTotal);
  }

  async function fetchTransactions() {
    setLoading(true);
    if (user && user.uid) {
      try {
        const q = query(collection(db, `users/${user.uid}/transactions`));
        console.log("Query:", q);
        const querySnapshot = await getDocs(q);
        const transactionsData = [];
        querySnapshot.forEach((doc) => {
          transactionsData.push({
            id: doc.id,
            ...doc.data()
          });
        }); 

        setTransactions(transactionsData);
        console.log("Transactions Array:", transactionsData);
        toast.success("Transactions fetched successfully");
      } catch (error) {
        console.error("Error fetching transactions:", error);
        toast.error("Error fetching transactions");
      }
    } else {
      console.log("No user found");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Cards
            income={income}
            expense={expense}
            totalBalance={totalBalance}
            showExpenseModel={showExpenseModel}
            showIncomeModel={showIncomeModel}
          />
          <AddExpenseModal
            isExpenseModelVisible={isExpenseModelVisible}
            handleExpenseCancel={handleExpenseCancel}
            onFinish={onFinish}
          />
          <AddIncomeModal
            isIncomeModelVisible={isIncomeModelVisible}
            handleIncomeCancel={handleIncomeCancel}
            onFinish={onFinish}
          />
          <TransactionsTable transactions={transactions}/>
        </> 
      )}
    </div>
  );
};

export default Dashboard;


