import React from "react";
import { useState } from "react";
import "./styles.css";
import Input from "../input";
import Header from "../Header";
import Button from "../Button"; /*import button here  in this */
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'  

function SingupinComponent() {
  const [name,setName]= useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [loginForm,setLoginForm]=useState(false);
  const[loading,setLoading]=useState(false);
function signwithemail(){
setLoading(true);
const auth = getAuth();
if(name!== "" && email!=="" && password!=="" && confirmPassword!==""){
if(password === confirmPassword){
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user>>>",user);
    toast.success("user created successfully")
    setLoading(false);
    setEmail("");
    setName("");
    setConfirmPassword("");
    setPassword("");
    creatuserdoc(user,name)
    // created doc with id as the following id 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
    // ..
  });
}else{
toast.error('password do not match');
  setLoading(false);
}}
else{
  toast.error('All filds are required')
  setLoading(false);
}


}

function creatuserdoc(){
//create a doc .



}



return (
  <>
    <Header/>
    {loginForm ?<>
    


    
    </>:<div className="wrapper">
    <h2 className="title">
      
      Sign Up on <span style={{color:`var(--theme)`}} >Financely</span></h2>
  
  <form action="post">

<Input label={"Enter Your Name "} 
state={name} 
setstate={setName}
placeholder={"Enter your name"}
/>

<Input type={"email"} 
label={"Email"} 
state={email} 
setstate={setEmail}
placeholder={"Enter your email"}
/>

<Input type={"password"}
label={"Password"} 
// type={password}
state={password} 
setstate={setPassword}
placeholder={" password"}
/>

  <Input type={"password"}
label={"confirm Password"} 
state={confirmPassword} 
setstate={setConfirmPassword}
placeholder={" confirm password"}
/>
<Button disabled={loading}
text={loading?"Loading..":"Sign Up Using Email"} onclick={signwithemail} /> 
<p style={{textAlign:"center"}}>or</p>
<Button text={loading?"Loading..":"Sign Up Using Google"}  />
  </form>

    </div>}
    

    </>
  )

}



export default SingupinComponent;