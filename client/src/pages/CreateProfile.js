import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import {
    Input,
    TextArea,
    Label,
    LabelChoices,
    RadioBtn,
    RangeSlider,
    FormBtn
} from "../components/Form";
import API from "../utils/API";
import ReactUploadImage from "../components/UploadImage";

class CreateProfile extends Component {

    state = {
            redirect: false,
            displayName: '',
            userName: '',
            email: '',
            password: '',
            userAge: '',
            identifyAs: '',
            relationStat: '',
            aboutMe: '',
            value: '5',
            // socialScale: ['5','5','5','5','5','5','5','5','5','5','5','5','5','5','5']
            question1: '5',
            question2: '5',
            question3: '5',
            question4: '5',
            question5: '5',
            question6: '5',
            question7: '5',
            question8: '5',
            question9: '5',
            question10: '5',
            question11: '5',
            question12: '5',
            question13: '5',
            question14: '5',
            question15: '5'
    };

    handleInputChange = event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleSliderChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/member' />
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.email && this.state.password) {
            API.saveProfile({
                display_name: this.state.displayName,
                username: this.state.userName,
                email: this.state.email,
                password: this.state.password,
                user_age: this.state.userAge,
                sexual_identity: this.state.identifyAs,
                relationship_status: this.state.relationStat,
                looking_for: this.state.aboutMe,
                soc_quest1: this.state.question1,
                soc_quest2: this.state.question2,
                soc_quest3: this.state.question3,
                soc_quest4: this.state.question4,
                soc_quest5: this.state.question5,
                soc_quest6: this.state.question6,
                soc_quest7: this.state.question7,
                soc_quest8: this.state.question8,
                soc_quest9: this.state.question9,
                soc_quest10: this.state.question10,
                soc_quest11: this.state.question11,
                soc_quest12: this.state.question12,
                soc_quest13: this.state.question13,
                soc_quest14: this.state.question14,
                soc_quest15: this.state.question15,
            })
            .then( (res, req) => {
                this.setState({
                    redirect: true
                });
                this.props.isAuthenticated(res.data.username);
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container" id="profileForm">
                <form>
                    <h3>Login Information</h3>
                    <hr></hr>
                    <Label>Enter Your Display Name</Label>
                    <Input
                        type="text"
                        name="displayName"
                        id="displayName"
                        value={this.state.displayName}
                        placeholder="Enter your first name"
                        onChange={this.handleInputChange}/>

                    <Label>Choose a Username</Label>
                    <Input
                        type="text"
                        name="userName"
                        id="userName"
                        value={this.state.userName}
                        placeholder="Choose a username"
                        onChange={this.handleInputChange}/>

                    <Label>Enter Your Email Address</Label>
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        value={this.state.email}
                        placeholder="Enter your email address"
                        onChange={this.handleInputChange}/>

                    <Label>Choose a Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        placeholder="Enter your password"
                        onChange={this.handleInputChange}/>
                </form>
                {/* <ReactUploadImage /> */}
                <form>
                    <h3>About Me</h3>
                    <hr></hr>
                    <Label>Age</Label>
                    <Input
                        type="text"
                        name="userAge"
                        id="userAge"
                        onChange={this.handleInputChange}/>

                    <Label>Most Identify As:</Label>
                    <LabelChoices>Gay</LabelChoices>
                    <RadioBtn
                        name="identifyAs"
                        id="gay"
                        value="Gay"
                        checked={this.state.identifyAs === "Gay"}
                        onChange={this.handleInputChange}/>
                    
                    <LabelChoices>Bisexual</LabelChoices>
                    <RadioBtn
                        name="identifyAs"
                        id="bisexual"
                        value="Bisexual"
                        checked={this.state.identifyAs === "Bisexual"}
                        onChange={this.handleInputChange}/>

                    <LabelChoices>Queer</LabelChoices>
                    <RadioBtn
                        name="identifyAs"
                        id="queer"
                        value="Queer"
                        checked={this.state.identifyAs === "Queer"}
                        onChange={this.handleInputChange}/>
                    
                    <LabelChoices>Straight/Curious</LabelChoices>
                    <RadioBtn
                        name="identifyAs"
                        id="straight-curious"
                        value="Straight-Curious"
                        checked={this.state.identifyAs === "Straight-Curious"}
                        onChange={this.handleInputChange}/>

                    <Label>Relationship Status</Label>
                    <LabelChoices>Single</LabelChoices>
                    <RadioBtn
                        name="relationStat"
                        id="single"
                        value="Single"
                        checked={this.state.relationStat === "Single"}
                        onChange={this.handleInputChange}/>

                    <LabelChoices>Dating</LabelChoices>
                    <RadioBtn
                        name="relationStat"
                        id="dating"
                        value="Dating"
                        checked={this.state.relationStat === "Dating"}
                        onChange={this.handleInputChange}/>

                    <LabelChoices>In a Relationship</LabelChoices>
                    <RadioBtn
                        name="relationStat"
                        id="relationship"
                        value="Relationship"
                        checked={this.state.relationStat === "Relationship"}
                        onChange={this.handleInputChange}/>

                    <LabelChoices>Polyamorous</LabelChoices>                   
                    <RadioBtn
                        name="relationStat"
                        id="polyamor"
                        value="Polyamorous"
                        checked={this.state.relationStat === "Polyamorous"}
                        onChange={this.handleInputChange}/>

                    <Label>What I'm Looking For</Label>
                    <TextArea
                        type="text"
                        name="aboutMe"
                        id="aboutMe"
                        onChange={this.handleInputChange}/>
                </form>

                <form>
                    <Label className="surveyQuestion">As a child, I had many friends and we all were loyal to each other.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question1}
                        name="question1"
                        id="question1"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question1}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I am happiest when alone.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question2}
                        name="question2"
                        id="question2"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question2}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I often participate in volunteer work.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question3}
                        name="question3"
                        id="question3"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question3}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I like to be around other people.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question4}
                        name="question4"
                        id="question4"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question4}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">As I get older, I appreciate solitude more and more.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question5}
                        name="question5"
                        id="question5"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question5}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I love partying.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question6}
                        name="question6"
                        id="question6"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question6}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I don’t like socializing at work.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question7}
                        name="question7"
                        id="question7"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question7}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I enjoy meeting new people.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question8}
                        name="question8"
                        id="question8"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question8}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I like to spend time with my colleagues after work.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question9}
                        name="question9"
                        id="question9"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question9}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">When given a choice, I always choose to be
                        around other people (e.g., taking a class in a gym instead of working out alone,
                        working as a part of a team, traveling in a group, etc.).</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question10}
                        name="question10"
                        id="question10"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question10}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I often help organize social events such as
                        dinners, competitions, exhibitions, ski weekends, etc.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question11}
                        name="question11"
                        id="question11"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question11}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I could be happy living in a remote and isolated place.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question12}
                        name="question12"
                        id="question12"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question12}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I am always available to my friends.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question13}
                        name="question13"
                        id="question13"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question13}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I would rather spend my vacation in a remote
                        and peaceful location than in a crowded resort town.</Label>
                    <Label>"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question14}
                        name="question14"
                        id="question14"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question14}</span>
                    </Label>
                    <hr></hr>
                    <Label className="surveyQuestion">I avoid crowds.</Label>
                    <Label >"1" - Strongly Disagree | "10" - Strongly Agree</Label>
                    <RangeSlider
                        type="range"
                        min="1"
                        max="10"
                        value={this.state.question15}
                        name="question15"
                        id="question15"
                        onChange={this.handleSliderChange}/>
                    <Label className="surveyResult">Value:<span id="result">
                            {this.state.question15}</span>
                    </Label>
                </form>  
                {this.renderRedirect()}
                <FormBtn id="submitProfile" onClick={this.handleFormSubmit}>Submit My Profile</FormBtn>
            </div>

        );

    }
}

export default CreateProfile;