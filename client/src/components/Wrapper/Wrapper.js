import React from "react";
import "./Wrapper.css";

function Wrapper(props){

    return(
        <div className="container my-auto" id="wrapper" {...props}/>
    );
}

export default Wrapper;