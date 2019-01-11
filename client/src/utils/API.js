//Front End API calls
import axios from "axios";

export default {
    saveProfile: function(Profiles) {
      return axios.post("/api/profiles", Profiles);
      },
    getProfile: function(User) {
      console.log(User.username)
      return axios.get("/api/profiles/" + User.username);
      },
    // login: function(loginInfo) {
    //   return axios.post("/auth/profiles/login", loginInfo);
    // },
    // isLoggedIn: function() {
    //   return axios.get("/auth/profiles/isLoggedIn");
    // }
};