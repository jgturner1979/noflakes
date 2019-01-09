import React, { Component } from "react";
import { Input, Label } from "../Form";

class Modal extends Component {
    state = {
        userName : '',
        password : ''
    }
    
    handleInputChange = event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    render(props) {
        return (
        
            <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    name="userName"
                                    value={this.state.userName}
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
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" {...props}>Login In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
