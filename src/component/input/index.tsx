import React  from "react";
import './style.css'

function input({label , state, setstate, placeholder,type}){
return(

<div className="input-wrapper">
    <p className="label-input">{label}</p>
    <input value={state}
    type={type}
    placeholder={placeholder}
    onChange={(e)=>setstate(e.target.value)}   
    className="input-field"/>
</div>



)

}
export default input;