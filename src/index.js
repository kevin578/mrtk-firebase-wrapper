const mobx = require("mobx");
const watchForState = mobx.autorun;
const stateObject = mobx.observable;

let user = require("./auth").user;
let database = require("./database").database;

window.onload = function() {
  document
    .getElementById("loginWithGoogle")
    .addEventListener("click", user.loginWithGoogle, false);
  document
    .getElementById("logout")
    .addEventListener("click", user.logout, false);
};

async function setUserInfo() {
  const userInfo = await user.getInfo();
  const { displayName, email, photoURL } = userInfo;
  if (displayName) {
    user.setData(displayName, email, photoURL);
  }
}

setUserInfo();

window.mrtk = {
  watchForState,
  stateObject,
  user,
  database
};
