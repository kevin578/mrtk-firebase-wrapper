

$(document).ready(function(){

    mrtk.watchForState(function() {
        if (mrtk.user.name) {
          document.getElementById("logout").style.display = "block";
          document.getElementById("loginWithGoogle").style.display = "none";
          document.getElementById("welcomeMessage").innerHTML = `Hello ${
            mrtk.user.name
          }`;
          
        } else {
          document.getElementById("loginWithGoogle").style.display = "block";
          document.getElementById("logout").style.display = "none";
          document.getElementById("welcomeMessage").innerHTML = `Please Login`;
        }
      });
})

