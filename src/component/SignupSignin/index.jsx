import { useState } from "react";
import "./styles.css";
import Input from "../input";
import Header from "../Header";
import Button from "../Button";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../firebase";
import   { db } from '../../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function SignupSigninComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to create user document in Firestore
  const createUserDocument = async (user, name) => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);
    const userdata = await getDoc(userRef);
    if (!userdata.exists()) {
      try {
        await setDoc(userRef, {
          name: user.displayName ? user.displayName : name,
          email: user.email,
          photoURL: user.photoURL ? user.photoURL : "",
          createdAt: new Date()
        });
        toast.success("Account created");
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("User already exists");
    }
  };


//signup with google authentication 

function google_se_sign(){
  setLoading(true);
  try{
const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
       navigate('/Dashboard');
    createUserDocument(user);
    console.log("google sign in successful :",user );
    toast.success("user sign in successfully");
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(error.message);
    setLoading(false);
  });
  }catch(e){
toast.error(e.message);
  }


}




  // Signup function
  const signUpWithEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          await createUserDocument(user, name);
          toast.success("User created successfully");
          setEmail("");
          setName("");
          setConfirmPassword("");
          setPassword("");
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error('Passwords do not match');
      }
    } else {
      toast.error('All fields are required');
    }
    setLoading(false);
  };

  // Login function
  const loginWithEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successfully');
        navigate('/Dashboard');
      } catch (error) {
        toast.error('User login failed!');
      }
    } else {
      toast.error('All fields are required');
    }
    setLoading(false);
  };

  return (
    <>
      {loginForm ? (
        <div className="wrapper">
          <Header />
          <h2 className="title">
            Login to <span style={{ color: `var(--theme)` }}>Financely</span>
          </h2>
          <form onSubmit={loginWithEmail}>
            <Input
              type="email"
              label="Email"
              state={email}
              setstate={setEmail}
              placeholder="Enter your email"
            />
            <Input
              type="password"
              label="Password"
              state={password}
              setstate={setPassword}
              placeholder="Enter your password"
            />
            <Button
              disabled={loading}
              text={loading ? "Loading.." : "Login"}
              onclick={loginWithEmail}
            />
            <p className="p-login" style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <span
                style={{ color: "var(--theme)", cursor: "pointer" }}
                onClick={() => setLoginForm(false)}
              >
                Sign Up
              </span>
            </p>
  <Button  onclick={google_se_sign}   text={loading ? "Loading.." : "Sign Up with Google"} />



          </form>
        </div>
      ) : (
        <>
          <Header />
          <div className="wrapper">
            <h2 className="title">
              Sign Up On <span style={{ color: `var(--theme)` }}>Financely</span>
            </h2>
            <form onSubmit={signUpWithEmail}>
              <Input
                label="Enter Your Name"
                state={name}
                setstate={setName}
                placeholder="Enter your name"
              />
              <Input
                type="email"
                label="Email"
                state={email}
                setstate={setEmail}
                placeholder="Enter your email"
              />
              <Input
                type="password"
                label="Password"
                state={password}
                setstate={setPassword}
                placeholder="Enter your password"
              />
              <Input
                type="password"
                label="Confirm Password"
                state={confirmPassword}
                setstate={setConfirmPassword}
                placeholder="Confirm your password"
              />
              <Button
                disabled={loading}
                text={loading ? "Loading.." : "Sign Up using Email"}
                onclick={signUpWithEmail}
              />
              <p style={{ textAlign: "center" }}>or</p>
              <Button  onclick={google_se_sign}   text={loading ? "Loading.." : "Sign Up with Google"} />
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
  );
}

export default SignupSigninComponent;
