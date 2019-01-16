import React, { Component } from "react";
// import Members from "../components/Member";
import {CardContainer, Card} from "../components/Card";
import API from "../utils/API";



class Member extends Component {

    state = {
        members : [],
    }

    componentDidMount() {
        this.getAllMembers();
    }

    getAllMembers = () => {
        API.getAllProfiles()
            .then(res =>
                this.setState({ members: res.data })
                )
            .catch(err => console.log(err));
    }

    render(){
        console.log("Member Render: ", this.props.displayProfile);
        return(
            <div className="container" id="userProfileInfo">
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Display Name:</h6>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.displayProfile.display_name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Age:</h6>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.displayProfile.user_age}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Identify As:</h6>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.displayProfile.sexual_identity}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Relationship Status:</h6>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.displayProfile.relationship_status}</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Looking for:</h6>
                    </div>
                    <div className="col-lg-3">
                        <p>{this.props.displayProfile.looking_for}</p>
                    </div>
                </div>
                <CardContainer>
                {this.state.members.map(member => {
                    return(
                    <Card key={member.id}
                    
                    className="card-body" id="memberCardBody">
                        <h4 className="card-text">{member.display_name}</h4>
                        <p className="card-text">{member.sexual_identity}</p>
                        <p className="card-text">{member.relationship_status}</p>
                        <p className="card-text">Age: {member.user_age}</p>
                    </Card>
                    );
                })}
            </CardContainer>
            </div> 
        )
    }
}
export default Member;