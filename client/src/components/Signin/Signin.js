import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import "./Signin.css";

class Signin extends Component {

    state = {
        redirect: false,
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div className="container my-auto" id="backgroundImage">
                <div className="row" id="loginRow">
                    <div className="col-md-4" id="loginButtons">
                        <h3 id="signupHeader">Flakes. Ghosting. Breadcrumbs</h3>
                        <h5 id="signupSubHead">The new dating terminology is a turn off!</h5>
                        <p id="introParagraph">Technology is great until it's not. Technology hasn't made dating in the 21st Century any easier. At NoFlakes we've creatd a new way to date. Match with people of your same socialble level and when you finally get to meet someone, we'll have you rate your date. Once you've got a "flakiness" percentage, you'll only match with other potential matches who have the same level of interest in actually finding that special someone.</p>
                        {this.renderRedirect()}
                        <button type="button" className="btn-login btn-lg btn-block" id="submit" onClick={this.handleButtonClick}>
                            <img src="assets/images/snowflake.png" alt="snowflake" id="snowFlakeImg"></img>I'm tired of flakes</button>
                    </div>

                    <div className="col-md-4">
                    </div>

                    <div className="col-md-4">
                    </div>
                </div>
            </div>

        );
    }

}

export default Signin;