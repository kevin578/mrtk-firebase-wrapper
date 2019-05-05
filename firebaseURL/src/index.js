const firebase = require('firebase');
let user = require('./auth').user;

var firebaseConfig = {
    apiKey: "AIzaSyBiRhvS8LX2HHhglveeWIiBmq9tOyEw1kA",
    authDomain: "petition-239619.firebaseapp.com",
    databaseURL: "https://petition-239619.firebaseio.com",
    projectId: "petition-239619",
    storageBucket: "petition-239619.appspot.com",
    messagingSenderId: "900671653422",
    appId: "1:900671653422:web:24906dbe9c9d627a"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
   user.getUserInfo().then((info)=> {
      console.log(info);
   });

  window.onload = function() {
    document.getElementById("loginWithGoogle").addEventListener ("click",   user.loginWithGoogle, false);
    document.getElementById("logoutWithGoogle").addEventListener ("click",   user.logout, false);
  }

  

  