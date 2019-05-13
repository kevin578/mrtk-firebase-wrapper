const mobx = require("mobx");
const watchForState = mobx.autorun;
const stateObject = mobx.observable;

let user = require("./auth").user;
let database = require("./database").database;


//set up event listeners for auth
window.onload = function() {
  document
    .getElementById("loginWithGoogle")
    .addEventListener("click", user.loginWithGoogle, false);
  document
    .getElementById("logout")
    .addEventListener("click", user.logout, false);
};


//set userInfo once the page loads
async function setUserInfo() {
  const userInfo = await user.getInfo();
  const { displayName, email, photoURL } = userInfo;
  if (displayName) {
    user.setData(displayName, email, photoURL);
  }
}
setUserInfo();

//export library to the window object.


window.mrtk = {
  watchForState,
  stateObject,
  user,
  database
};
