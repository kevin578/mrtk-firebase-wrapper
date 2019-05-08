const mobx = require('mobx')

  let user = require('./auth').user;
  let database = require('./database').database;

  async function setUserInfo() {
    const userInfo = await user.getInfo();
    const {displayName, email, photoURL} = userInfo;
    if (displayName) {
      user.setData(displayName, email, photoURL);
    }
  }

  setUserInfo();

  const watchForState = mobx.autorun;
  const stateObject = mobx.observable

  watchForState(function() {
    if (user.name) {
      document.getElementById("loginWithGoogle").style.visibility = "hidden";
      document.getElementById("logout").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Hello ${user.name}`
    }
    else {
      document.getElementById("logout").style.visibility = "hidden";
      document.getElementById("loginWithGoogle").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Please Login`
    }
  }) 



  window.onload = function() {
    document.getElementById("loginWithGoogle").addEventListener ("click",   user.loginWithGoogle, false);
    document.getElementById("logout").addEventListener ("click",   user.logout, false);
  }

window.mrtk = {
  watchForState, stateObject, user, database
}

  

  