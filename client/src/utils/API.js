//Front End API calls
import axios from "axios";

export default {
    saveProfile: function(Profiles) {
      return axios.post("/api/profiles", Profiles);
      },
    getProfile: function(Profiles) {
      return axios.get("/api/profiles/" + Profiles.username);
      },
};