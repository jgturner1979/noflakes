import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen"
import CreateProfile from "./pages/CreateProfile";
import Member from "./pages/Member";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/createprofile" component={CreateProfile} />
          <Route exact path="/member" component={Member} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
