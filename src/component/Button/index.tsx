import React from "react";
import './styles.css'

function Button({text,onclick}){
return (
<>
<div className="btn"        onClick={onclick}>{text}</div>
</>


)

}

export default Button;