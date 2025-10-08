import React, { useEffect } from 'react';
import './styles.css';
import{auth} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
const Header = () => {
  const [user, loading] = useAuthState(auth);
const navigate = useNavigate();

  useEffect(()=>{
if(user){
 navigate('/dashboard')

}




},[user,loading ])






function logout(){

try{
// alert("Logout successfully")
const auth = getAuth();
signOut(auth).then(() => {

  navigate('/');
  toast.success("Logout successfully");
}).catch((error) => {

});
}catch(e){
  toast.error("Logout failed");
}


}

  return (

      <div className="navbar">
<p style={{fontWeight:600}}>financely.</p>
{user && (
  <p   className='logo_link' onClick={logout} style={{cursor:"pointer"}}>LogOut</p>
)}
      </div>
 
  );
};

export default Header;



