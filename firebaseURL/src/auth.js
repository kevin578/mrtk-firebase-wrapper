const firebase = require("firebase");

var provider = new firebase.auth.GoogleAuthProvider();

let user = {
  name: "",
  email: "",
  photoURL: "",
  isLoggedIn: false,

  loginWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(function(error) {
        console.log("error:", error);
      });
  },

  logout() {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        console.log(error);
      });
  },

  getUserInfo: function() {
    let name, email, photoURL, isLoggedIn;

    return new Promise((resolve, reject)=> {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const { displayName, email, photoURL } = user;
          resolve({
            displayName, email, photoURL
          })
        } else {
          resolve('Not logged in')
        }
      });
    })


  }
};

module.exports = {
  user
};
