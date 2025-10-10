import React from "react";
import './styles.css';
import { Card,Row} from "antd";
import Button from "../Button";
function index(){
return(
<div>
<Row className="my-row">
<Card    className="my-card"      title=" Current Balance">
    <p>₹0</p>
<Button text= "Reset button"></Button>
    </Card>
</Row>


</div>
);
}

export default index;




