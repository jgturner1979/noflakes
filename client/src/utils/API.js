//Front End API calls
import axios from "axios";

export default {
    saveProfile: function(Profiles) {
      return axios.post("/api/profiles", Profiles);
      },
    getAllProfiles: function() {
      return axios.get("/api/profiles/");
    },
    getProfile: function(User) {
      return axios.get("/api/profiles/" + User);
      },
    // login: function(User) {
    //   console.log("/api/auth/", User.username);
    //   return axios.post("/api/auth/" + User.username);
    //   },
    login: function(User) {
      return axios.post("/api/auth", User);
      },
    appLogin: function(user) {
      return axios.get("/api/profiles/" + user);
    }

};