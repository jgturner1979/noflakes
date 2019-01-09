import React, { Component } from "react";
import { Input, Label } from "../Form";
import API from "../../utils/API";

class Modal extends Component {
    state = {
        email : '',
        password : '',
        loggedIn : false
    }
    
    handleInputChange = event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    LoginUser = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.login({
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                if(res.data.loggedIn) {
                    this.setState({
                        loggedIn: true
                    });
                };
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
                                <Label>Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Enter your email"
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" {...props} onClick={this.LoginUser}>Login In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
