import React from "react";
import { useState } from "react";
import "./styles.css";
import Input from "../input";
import Header from "../Header";
import Button from "../Button"; /*import button here  in this */
function SingupinComponent() {
    const [name,setName]= useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
return (
    <>
    <Header/>
    <div className="wrapper">
    <h2 className="title">Sign Up on <span style={{color:`var(--theme)`}} >Financely</span></h2>
  
  <form action="post">

<Input label={"Enter Your Name "} 
state={name} 
setstate={setName}
placeholder={"Enter your name"}
  />

<Input label={"Email"} 
state={email} 
setstate={setEmail}
placeholder={"Enter your email"}
  />

<Input label={"Password"} 
// type={password}
state={password} 
setstate={setPassword}
placeholder={" password"}
  />

  <Input label={"confirm Password"} 
state={confirmPassword} 
setstate={setConfirmPassword}
placeholder={" confirm password"}
  />
<Button text={"Sign Up Using Email"}  /> 
<p style={{textAlign:"center"}}>or</p>
<Button text={"Sign Up Using Google"}  />
  </form>

    </div>
    </>
)

}


export default SingupinComponent;