import React, { Component } from "react";
import API from "../utils/API";

class Member extends Component {

    state = {
        user : {}
    };

    //When the component mounts it'll load the user's profile information.
    componentDidMount() {
        this.getUserProfile();
    }

    getUserProfile = () => {
        API.getProfile()
            .then(res =>
                this.setState({ user: res.data })
                )
                .catch(err => console.log(err));
    };


    render() {
        return(
            <div className="container" id="userProfileInfo">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Display Name:</h3>
                    </div>
                    <div className="col-lg-6">
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Member;