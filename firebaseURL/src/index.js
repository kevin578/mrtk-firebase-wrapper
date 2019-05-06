const firebase = require('firebase/app');
const mobx = require('mobx')
let user = require('./auth').user;


var firebaseConfig = {
    apiKey: "AIzaSyBiRhvS8LX2HHhglveeWIiBmq9tOyEw1kA",
    authDomain: "petition-239619.firebaseapp.com",
    databaseURL: "https://petition-239619.firebaseio.com",
    projectId: "petition-239619",
    storageBucket: "",
    messagingSenderId: "900671653422",
    appId: "1:900671653422:web:24906dbe9c9d627a"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  async function setUserInfo() {
    const userInfo = await user.getUserInfo();
    const {displayName, email, photoURL} = userInfo;
    if (displayName) {
      user.setData(displayName, email, photoURL);
    }
  }

  setUserInfo();

  const withState = mobx.autorun;


  withState(async function() {
    if (user.name) {
      document.getElementById("loginWithGoogle").style.visibility = "hidden";
      document.getElementById("logoutWithGoogle").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Hello ${user.name}`

    }
    else {
      document.getElementById("logoutWithGoogle").style.visibility = "hidden";
      document.getElementById("loginWithGoogle").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Please Login`
    }
  })  
  


  window.onload = function() {
    document.getElementById("loginWithGoogle").addEventListener ("click",   user.loginWithGoogle, false);
    document.getElementById("logoutWithGoogle").addEventListener ("click",   user.logout, false);
  }

  

  