import React from "react";
import { useState } from "react";
import "./styles.css";
import Input from "../input";
function SingupinComponent() {
    const [name,setName]= useState("")
return (
    <>
    <div className="wrapper">
    <h2 className="title">Sign Up on <span style={{color:`var(--theme)`}} >Financely</span></h2>
  
  <form action="">

<Input label={""} 
state={name} 
setstate={setName}
placeholder={"Enter your name"}
  />


  </form>
    </div>
    </>
)

}


export default SingupinComponent;