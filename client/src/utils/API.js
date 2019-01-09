//Front End API calls
import axios from "axios";

export default {
    saveProfile: function(Profiles) {
      return axios.post("/api/profiles", Profiles);
      },
    getProfile: function(Profiles) {
      return axios.get("/api/profiles/" + Profiles.username);
      },
    // login: function(loginInfo) {
    //   return axios.post("/auth/profiles/login", loginInfo);
    // },
    // isLoggedIn: function() {
    //   return axios.get("/auth/profiles/isLoggedIn");
    // }
};