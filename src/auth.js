const mobx = require('mobx');

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
        const {displayName, email, photoURL} = resp.user;
        user.setData(displayName, email, photoURL)
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

  getInfo: function() {
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
