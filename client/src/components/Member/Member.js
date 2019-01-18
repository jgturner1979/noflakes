import React, {Component} from "react";
import "./Member.css";
import {CardContainer, Card} from "../Card";
import API from "../../utils/API";

class Members extends Component {
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

    render() {
        return(
            <CardContainer>
                {this.state.members.map(member => {
                    return(
                    <Card 
                    // <img src="https://via.placeholder.com/150.jpg/333333" className="card-img-top" alt="member photo"></img>
                    className="card-body">
                        <h4 className="card-text" id="memberName">{member.display_name}</h4>
                        <h5 className="card-text">{member.sexual_identity}</h5>
                        <h5 className="card-text">{member.relationship_status}</h5>
                        <h5 className="card-text">{member.user_age}</h5>
                    />
                    </Card>
                    );
                })}
            </CardContainer>
        )}
}

export default Members;




    
