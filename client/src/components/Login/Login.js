import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import Modal from "../Modal";
import "./Login.css";

class Login extends Component {
    
    state = {
        redirect: false,
        modal: false,
    }

    handleInputChange = event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleButtonClick = event => {
        event.preventDefault();
        this.setState({
            redirect: true
        });
    }

    handleModal = event => {
        event.preventDefault();
        this.setState({
            modal: true
        })
    }

    renderModal = () => {
        console.log(this.props);
        if (this.state.modal) {
            return (
                <div>
                    <Modal {...this.props}/>
                </div>
            )
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/createprofile' />
        }
    }

    render() {
        return (
            <div className="container my-auto" id="loginInfo">
                <div className="row align-items-center" id="loginScreen">
                    <div className="col-md-4" id="loginButtons">
                        {this.renderModal()}
                        <button type="button" className="btn-login btn-lg btn-block" data-toggle="modal" data-target="#login" onClick={this.handleModal}>
                            <img src="assets/images/snowflake.png" alt="snowflake" id="snowFlakeImg"></img>Click to Log In</button>
                    </div>
                    <div className="col-md-4" id="loginButtons">
                        {this.renderRedirect()}
                        <button type="button" className="btn-login btn-lg btn-block" id="submit" onClick={this.handleButtonClick}>
                            <img src="assets/images/snowflake.png" alt="snowflake" id="snowFlakeImg"></img>Create a Profile</button>
                    </div>
                </div>

            </div>

        );
    }

}

export default Login;