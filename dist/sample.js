$(document).ready(function(){

    //handles auth
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

    //submit click handler
    $('#submitButton').click(async function() {
        const db = firebase.firestore();
        const title  = $('#petitionTitle').val();
        const description = $('#petitionDescription').val();
        //added empty signature array.
        await db.collection("petitions").add({ title, description, signatures: [] })
        $('#petitionTitle').val("");
        $('#petitionDescription').val("");
      })

    mrtk.database.getAll("petitions")
    .then((resp)=> {
      //creates object that will store all the signatures locally
      const signatureObject = {}

      //maps over array petition array
      resp.map(function(petition) {
        //adds 
        signatureObject[petition.id] = petition.signatures
        $("#petitionContainer").append(`
          <div>
            <p>${petition.title}</p>
            <p>${petition.description}</p>
            <button id = "${petition.id}" class = "signButton">Sign</button>     
          </div>
        `)
      })
      $(".signButton").click(function(event) {
        //gets id from event handler
        const id = event.currentTarget.id;
        //gets user name
        const name = mrtk.user.name;
        
        //checks if user has already signed pettion. If they haven't pushes their name to the array
        if (!signatureObject[id].includes(name)) {
            signatureObject[id].push(name);

            //takes local array and updates firestore
            const db = firebase.firestore();
            db.collection("petitions").doc(id).update({
              signatures:  signatureObject[id]
          })
        }
      })
    })

})




