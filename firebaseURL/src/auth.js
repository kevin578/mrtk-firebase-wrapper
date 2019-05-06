const firebase = require("firebase/app");
const mobx = require('mobx');
require('firebase/auth');

var provider = new firebase.auth.GoogleAuthProvider();

let user = mobx.observable({
  name: "",
  email: "",
  photoURL: "",
  isLoggedIn: false,

  loginWithGoogle() {
    
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(resp) {
        user.setData(resp.displayName, resp.email, resp.photoURL)
      })
      .catch(function(error) {
        console.log("error:", error);
      });
  },

  logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        user.setData("","","")
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  setData(name, email, url) {
    this.name = name;
    this.email = email;
    this.photoURL = url;
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
});

module.exports = {
  user
};
