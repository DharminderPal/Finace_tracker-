import React from "react";
import './styles.css';
import { Card, Row } from "antd";
import Button from "../Button";
function index({ showExpenseModel, showIncomeModel })  {



    return (
        <div>


            <Row className="my-row">
                <Card variant={true} className="my-card"   >
                    <h2>CurrentBalance</h2>
                    <p>₹0</p>
                    <Button text="Reset Balance" blue={true}></Button>
                </Card>

                <Card variant={true} className="my-card" >
                    <h2>Total Income</h2>   
                    <p>₹0</p>
                    <Button text="Add Income" blue={true} onclick={showIncomeModel}></Button>
                </Card>

                <Card variant={true} className="my-card" >
                    <h2>Total Expenses</h2>
                    <p>₹0</p>
                    <Button text="Add Expense" blue={true}  onclick={showExpenseModel} ></Button>
                </Card>
            </Row>
        </div>
    );
}

export default index;




