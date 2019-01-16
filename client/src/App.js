import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen"
import CreateProfile from "./pages/CreateProfile";
import Member from "./pages/Member";
import Navbar from "./components/Navbar";
import API from "./utils/API";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {

  state = {
    user : {}
  }

  getUserData = (data) => {
    API.getProfile(data)
        .then(res => {
            this.setState({ user: res.data })
        })
            .catch(err => console.log(err));
  }

  getLoginData = (data) => {
    console.log(data);
    API.appLogin(data)
        .then(res => {
          console.log("LOOK AT ME!!!! ", res);
            this.setState({ user: res.data })
        })
            .catch(err => console.log(err));
  }

render() {
  console.log("User: ", this.state.user);
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" 
            render={(props) => <LoginScreen {...props} isAuthenticated={this.getLoginData}/>} />
          <Route exact path="/createprofile"
            render={(props) => <CreateProfile {...props} isAuthenticated={this.getUserData}/>} />
          <Route exact path="/member" 
            render={(props) => <Member {...props} displayProfile={this.state.user} />} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
}

export default App;
