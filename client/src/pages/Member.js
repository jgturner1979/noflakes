import React, { Component } from "react";
import API from "../utils/API";

class Member extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user : {}
    }
    }

    //When the component mounts it'll load the user's profile information.
    componentDidMount() {
        this.getUserProfile();
    }

    getUserProfile = () => {
        console.log("Member page ", this.props.displayProfile)
        API.getProfile(this.props.displayProfile)
            .then(res => {
                this.setState({ user: res.data })
                console.log(res)
                console.log(this.state)
            })
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
                        {/* <p>{this.state.user.displayname}</p> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default Member;