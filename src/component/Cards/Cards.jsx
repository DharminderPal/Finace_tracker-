import React from "react";
import './styles.css';
import { Card,Row} from "antd";
import Button from "../Button";
function index(){
return(
<div>

{/* 
<Row className="my-row">

<Card    className="my-card"      title=" Current Balance">
    <p>₹0</p>
<Button text= "Reset button" blue={true}></Button>
    </Card>
<Card    className="my-card"      title=" Current Balance">
    <p>₹0</p>
<Button text= "Reset button" blue={true}></Button>
    </Card>
<Card  className="my-card"      title=" Current Balance">
    <p>₹0</p>
<Button text= "Reset button" blue={true}></Button>    
    </Card>
</Row> */}
<Row className="my-row">
    <Card bordered={true} style={cardstyle} >
        <h2>CurrentBalance</h2>
        <p>₹{currentBalance}</p>
       <div></div>

    </Card>




</Row>














</div>
);
}

export default index;




