// import React from "react";
// import { useState } from "react";
// import { Modal, Tag } from 'antd';
// import Header from '../component/Header';
// import Cards from '../component/Cards/Cards';
// import AddExpenseModal from "../component/Modal/addexpens";
// import AddIncomeModal from "../component/Modal/Addincome";
// import { toast } from "react-toastify";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";
// import { addDoc,collection } from "firebase/firestore";
// import { db } from "../firebase";
// // import moment from "./moment";
// import moment from "moment";
// import parsefloat from "parseFloat";
// const Dashboard = () => {
// const transections=[
//   {
//     type:"income",
//     amount:1200,
//     tag:"salary",
//     name:"income 1",
//     date:"10/17/2025",
//   },
//     {
//     type:"expense",
//     amount:1200,
//     tag:"food",
//     name:"expense",
//     date:"10/17/2025",
//   },
// ]

// const [user, loading, error] = useAuthState(auth);  /* isko study krna ki kya ho rha hai theek hai */
// const [isExpenseModelVisible,setIsExpenseModelVisible]=useState(false);
// const [isIncomeModelVisible,setIsIncomeModelVisible]=useState(false);


// //arrow function 
// const showIncomeModel=()=>{
// setIsIncomeModelVisible(true);
// } 

// const showExpenseModel=()=>{
// setIsExpenseModelVisible(true);
// } 
// const handleExpenseCancel=()=>{
// setIsExpenseModelVisible(false);
// }

// const handleIncomeCancel=()=>{
// setIsIncomeModelVisible(false);
// }
// /*end here arrow function */ 

// const onFinish=(values,type)=>{
//   // console.log("Form submitted", values, type)
// const newTransaction = {
//   type,
//   date:moment(values.date).format("YYYY-MM-DD"),
//   amount:parsefloat(values.amount),
//   tag:values.tag,
//   name :values.name,
// };
// addTransaction(newTransaction);
// }

//  async function addTransaction(transaction){
// try{
// const docRef = await addDoc(collection(db,`users/${user.uid}/transactions`),transaction);
// console.log("document rreturn ",docRef.id);
// // if(!transaction){
// toast,success("transection added successfully");
// // } 
// }catch(e){
//   console.error("Error adding document: ", e);
//   if(!transaction){
// toast.error("error transection ");
// }
// }
//  }
//   return (
//     <div>
//       <Header/>
//       <Cards
//       // currentBalance={currentBalance}
//       // income={income}
//       // expense={expense}
//       showExpenseModel={showExpenseModel}
//       showIncomeModel={showIncomeModel}
//       // CardStyle={cardStyle}
//       // reset={reset}
//       />
// <AddExpenseModal
// isExpenseModelVisible={isExpenseModelVisible}
// handleExpenseCancel={handleExpenseCancel}
// onFinish={onFinish}
// />
// <AddIncomeModal
// isIncomeModelVisible={isIncomeModelVisible}
// handleIncomeCancel={handleIncomeCancel}
// onFinish={onFinish}
// />
//     </div>
//   );
// };

// export default Dashboard;
// *********************************************************************
// import React from "react";
// import { useState} from "react";
// import { Modal, Tag } from 'antd';
// import Header from '../component/Header';
// import Cards from '../component/Cards/Cards';
// import AddExpenseModal from "../component/Modal/addexpens";
// import AddIncomeModal from "../component/Modal/Addincome";
// import { toast } from "react-toastify";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";
// import { addDoc, collection, query, getDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import moment from "moment";
// import { useEffect } from "react";
// const Dashboard = () => {
// const transections=[
//   // {
//   //   type:"income",
//   //   amount:1200,
//   //   tag:"salary",
//   //   name:"income 1",
//   //   date:"10/17/2025",
//   // },
//   //   {
//   //   type:"expense",
//   //   amount:1200,
//   //   tag:"food",
//   //   name:"expense",
//   //   date:"10/17/2025",
//   // },
// ]

// const[transactions,setTransactions]=useState([]);
// const[loading,setLoading]=useState([]);
//   const [user] = useAuthState(auth);
//   const [isExpenseModelVisible, setIsExpenseModelVisible] = useState(false);
//   const [isIncomeModelVisible, setIsIncomeModelVisible] = useState(false);

//   const showIncomeModel = () => {
//     setIsIncomeModelVisible(true);
//   };

//   const showExpenseModel = () => {
//     setIsExpenseModelVisible(true);
//   };

//   const handleExpenseCancel = () => {
//     setIsExpenseModelVisible(false);
//   };

//   const handleIncomeCancel = () => {
//     setIsIncomeModelVisible(false);
//   };

//   const onFinish = (values, type) => {
//     const newTransaction = {
//       type,
//       date: moment(values.date).format("YYYY-MM-DD"),
//       amount: parseFloat(values.amount),
//       tag: values.tag, // Fixed: lowercase 'tag' instead of 'Tag'
//       name: values.name,
//     };
//     addTransaction(newTransaction);
//   };

//   async function addTransaction(transaction) {
//     try {
//       // Validate transaction data before saving
//       if (!transaction || !user) {
//         toast.error("Invalid transaction data or user not authenticated");
//         return;
//       }

//       const docRef = await addDoc(
//         collection(db, `users/${user.uid}/transactions`), 
//         transaction
//       );

//       console.log("Document created with ID: ", docRef.id);
//       toast.success("Transaction added successfully");

//       // Close modals after successful submission
//       setIsExpenseModelVisible(false);
//       setIsIncomeModelVisible(false);

//     } catch (e) {
//       console.error("Error adding document: ", e);
//       toast.error("Error adding transaction");
//     }
//   }
// useEffect (() => {

// fetchTransactions();

// },[]);

// /*please this funciton wha working  read and gain  the knowledge */ 

// async function fetchTransactions(){
//   setLoading(true);
//   if(user){
// const q = query(collection(db,`user/${user.uid}/transections`));
// console.log(q);
// const querySnapshot = await getDoc(q);
// const transactions = [];
// querySnapshot.forEach((doc) => {
//   transactions.push(doc.data());
// });
// setTransactions(transactions);
// console.log("Transactions Array:",transactions);
// toast.success("Transactions fetched successfully");
// }
// setLoading(false);
// }

//   return (
//     <div>
//       <Header />
//       {loading ? (
//         <p>Loading....</p>
//       ) : (
//         <>
//           <Cards
//             showExpenseModel={showExpenseModel}
//             showIncomeModel={showIncomeModel}
//           />
//           <AddExpenseModal
//             isExpenseModelVisible={isExpenseModelVisible}
//             handleExpenseCancel={handleExpenseCancel}
//             onFinish={onFinish}
//           />
//           <AddIncomeModal
//             isIncomeModelVisible={isIncomeModelVisible}
//             handleIncomeCancel={handleIncomeCancel}
//             onFinish={onFinish}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



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
import { addDoc, collection, query, getDocs } from "firebase/firestore"; // Added getDocs import
import { db } from "../firebase";
import moment from "moment";
import Item from "antd/es/list/Item";
import TransactionsTable from "../component/TransactionsTable";
const Dashboard = () => {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false); // Fixed: should be boolean, not array
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
const newarray = transactions.push(transaction);
setTransactions(newarray);
sumBal()
      // Refresh transactions after adding new one
      fetchTransactions();

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
  }, [transactions])


  function sumBal() {
    let incomeTotal = 0;
    let expenseTotal = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') {
        incomeTotal += transaction.amount;
      } else if (transaction.type === 'expense') {
        expenseTotal += transaction.amount;
      }
    });

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


