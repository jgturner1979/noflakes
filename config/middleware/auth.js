const auth = {
  isLoggedIn: (req, res, next)=> {
      if(req.isAuthenticated()){
          console.log('user authenticated');
          next();
      } else{
          console.log("user not authenticated");
          res.redirect('/login')
      }
  },

  logoutUser: (req, res, next)=> {
      if(req.isAuthenticated()){
          console.log('logged out successfully')
          req.logout();
          next();
      } else {
          next();
      }
  },
}

module.exports = auth;