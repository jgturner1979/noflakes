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
      console.log(User);
      return axios.get("/api/profiles/" + User);
      },
    login: function(User) {
      console.log(`/api/profiles/${User}`);
      return axios.get("/api/profiles/" + User.username);
      },
    appLogin: function(user) {
      return axios.get("/api/profiles/" + user);
    }

};