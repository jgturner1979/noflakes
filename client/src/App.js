import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen"
import CreateProfile from "./pages/CreateProfile";
import Member from "./pages/Member";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {

  state = {
    user : {}
  }

  getUserData = (data) => {
    this.setState({
      user : data
    });
    console.log("State ", this.state);
    console.log("Data ", data);
  }

render() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginScreen} />
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
