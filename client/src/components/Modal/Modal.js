import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input, Label } from "../Form";
import API from "../../utils/API";

class Modal extends Component {

    state = {
        username : "",
        password : "",
        loggedIn : false,
        redirect: false,
    }

    
    handleInputChange = event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/member' />
        }
    }

    LoginUser = event => {
        event.preventDefault();
        console.log("When Login Button Clicked: ", this.state);
        if (this.state.username && this.state.password) {
            API.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res);
                this.setState({
                    redirect: true,
                });
                this.props.isAuthenticated(res.data.username);
                console.log("Is this the User?", res.data.username);
                // console.log(this.props);
                console.log("logged in!")
            }).catch(err => console.log(err));
        }
    };

    render(props) {
        return (
        
            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="ModalCenterTitle">Enter Your Login Information</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    
                        <div className="modal-body">
                            <form>
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    placeholder="Enter your username"
                                     onChange={this.handleInputChange}/>
                            
                                 <Label>Password</Label>
                                <Input
                                    type="password"
                                     name="password"
                                    value={this.state.password}
                                    placeholder="Enter your password"
                                    onChange={this.handleInputChange}/>
                            </form>
                        </div>
                        {this.renderRedirect()}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" {...props} onClick={this.LoginUser}>Login In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
