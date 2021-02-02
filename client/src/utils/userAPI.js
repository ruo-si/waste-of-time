import axios from "axios";

const userAPI = {
  loginUser: function (user) {
    return axios.post("/api/user/login", user)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate/")
  },
  logout: function(){
    return axios.get("/api/user/logout/");
  }
};

export default userAPI