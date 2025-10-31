import React from "react";
import { useState } from "react";
import { Modal, Tag } from 'antd';
import Header from '../component/Header';
import Cards from '../component/Cards/Cards';
import AddExpenseModal from "../component/Modal/addexpens";
import AddIncomeModal from "../component/Modal/Addincome";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../firebase";
// import moment from "./moment";
import moment from "moment";
import parsefloat from "parseFloat";
const Dashboard = () => {
const transections=[
  {
    type:"income",
    amount:1200,
    tag:"salary",
    name:"income 1",
    date:"10/17/2025",
  },
    {
    type:"expense",
    amount:1200,
    tag:"food",
    name:"income 1",
    date:"10/17/2025",
  },
]

const {user} = useAuthState(auth);  /* isko study krna ki kya ho rha hai theek hai */
const [isExpenseModelVisible,setIsExpenseModelVisible]=useState(false);
const [isIncomeModelVisible,setIsIncomeModelVisible]=useState(false);


//arrow function 
const showIncomeModel=()=>{
setIsIncomeModelVisible(true);
} 

const showExpenseModel=()=>{
setIsExpenseModelVisible(true);
} 
const handleExpenseCancel=()=>{
setIsExpenseModelVisible(false);
}

const handleIncomeCancel=()=>{
setIsIncomeModelVisible(false);
}
/*end here arrow function */ 

const onFinish=(values,type)=>{
  // console.log("Form submitted", values, type)
const newTransaction = {
  type : type ,
  date:moment(values.date).format("YYYY-MM-DD"),
  amount:parsefloat(values.amount),
  Tag:values.tag,
  name :values.name,
};
addTransaction(newTransaction);
}

 async function addTransaction(transaction){
try{
const docRef = await addDoc(collection(db,`users/${user.uid}/transactions`),transaction);
console.log("document rreturn ",docRef.id);
// if(!transaction){
toast,success("transection added successfully");
// } 
}catch(e){
  console.error("Error adding document: ", e);
  if(!transaction){
toast.error("error transection ");
}
}
 }


  return (
    <div>
      <Header/>
      <Cards
      // currentBalance={currentBalance}
      // income={income}
      // expense={expense}
      showExpenseModel={showExpenseModel}
      showIncomeModel={showIncomeModel}
      // CardStyle={cardStyle}
      // reset={reset}
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
    </div>
  );
};

export default Dashboard;