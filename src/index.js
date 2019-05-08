const mobx = require('mobx')

  let user = require('./auth').user;
  let database = require('./database').database;

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

window.mrtk = {
  withState, user, database
}

  

  