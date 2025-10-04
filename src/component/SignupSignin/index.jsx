import React from "react";
import { useState } from "react";
import "./styles.css";
import Input from "../input";
import Header from "../Header";
import Button from "../Button"; /*import button here  in this */
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../../firebase'
// import { auth,db } from '../../firebase'
import Dashboard from "../../pages/Dashboard";
import { useNavigate } from 'react-router-dom';

function SingupinComponent() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(false);
 const Navigate = useNavigate();


  function signwithemail() {
    setLoading(true);
    const auth = getAuth();
    if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("user>>>", user);
            toast.success("user created successfully")
            setLoading(false);
            setEmail("");
            setName("");
            setConfirmPassword("");
            setPassword("");
            creatuserdoc(user, name);
          
            // created doc with id as the following id 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)

          });
      } else {
        toast.error('password do not match');
        setLoading(false);
      }
    }
    else {
      toast.error('All filds are required')
      setLoading(false);
    }


  }

  function LoginusingEmail() {
    console.log("login using email", email, password)

    if (password !== "" && email !== "") {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('login successfully');
            console.log("user logged in ", user.email);
            Navigate("/Dashboard");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
               toast.error('user login failed !')
          });
    } else {
      toast.error('All filds are required');
    }
  }

  async function creatuserdoc(user) {
//create the doc 


await setDoc(doc(db,"cities","new-city-id"),{
  name:user.displayName ? user.displayName:name,
  email,
  photoURL:photoURL ?photoURL:"", })
   createdAt
  }
  return (
    <>
      {loginForm ? (
        <div className="wrapper">
          <h2 className="title">
            Login On <span style={{ color: `var(--theme)` }}>Financely</span>
          </h2>
          <form action="post">
            <Input
              type={"email"}
              label={"Email"}
              state={email}
              setstate={setEmail}
              placeholder={"Enter your email"}
            />
            <Input
              type={"password"}
              label={"Password"}
              state={password}
              setstate={setPassword}
              placeholder={"Enter your password"}
            />
            <Button
              disabled={loading}
              text={loading ? "Loading.." : "Login"}
              onclick={LoginusingEmail}
            />
            <p className="p-login" onClick={() => { setLoginForm(!loginForm) }} style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <span
                style={{ color: "var(--theme)", cursor: "pointer" }}
                onClick={() => setLoginForm(false)}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      ) : (
        <>
          <Header />
          <div className="wrapper">
            <h2 className="title">
              Sign Up On <span style={{ color: `var(--theme)` }}>Financely</span>
            </h2>
            <form action="post">
              <Input
                label={"Enter Your Name "}
                state={name}
                setstate={setName}
                placeholder={"Enter your name"}
              />
              <Input
                type={"email"}
                label={"Email"}
                state={email}
                setstate={setEmail}
                placeholder={"Enter your email"}
              />
              <Input
                type={"password"}
                label={"Password"}
                state={password}
                setstate={setPassword}
                placeholder={"Enter your password"}
              />
              <Input
                type={"password"}
                label={"Confirm Password"}
                state={confirmPassword}
                setstate={setConfirmPassword}
                placeholder={"Confirm your password"}
              />
              <Button
                disabled={loading}
                text={loading ? "Loading.." : "Sign Up using Email"}
                onclick={signwithemail}
              />
              <p style={{ textAlign: "center" }}>or</p>
              <Button text={loading ? "Loading.." : "Sign Up with Google"} />
              <p style={{ textAlign: "center" }}>
                Already have an account?{" "}
                <span
                  style={{ color: "var(--theme)", cursor: "pointer" }}
                  onClick={() => setLoginForm(true)}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </>
      )}
    </>
  )
};

export default SingupinComponent;
