import React from "react";
import { useState } from "react";
import { Modal } from 'antd';
import Header from '../component/Header';
import Cards from '../component/Cards/Cards';

const Dashboard = () => {
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
  return (
    <div>
      <Header/>
      <Cards
      showExpenseModel={showExpenseModel}
      showIncomeModel={showIncomeModel}
      />
      <Modal open = {isIncomeModelVisible}
      title="Add Income"
      onCancel={handleIncomeCancel}
      >Income Modal
      </Modal>



       <Modal open = {isExpenseModelVisible}
       title="Add Expense"
       onCancel={handleExpenseCancel}
       >Expense Modal</Modal>
    </div>
  );
};

export default Dashboard;

