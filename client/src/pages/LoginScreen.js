import React from "react";
import Login from "../components/Login";
import Wrapper from "../components/Wrapper"

function LoginScreen(props) {
    console.log(props);
    return (
        <div>
            <Wrapper>
                <Login {...props}/>
            </Wrapper>
        </div>
    )
}

export default LoginScreen;