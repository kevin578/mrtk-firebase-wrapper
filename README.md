# mrtk-firebase-wrapper

Provides a simple interface for students and beginners to create full-stack apps with databases, auth, and state.

## Getting started

1. Set up an account on [Firebase](https://firebase.google.com/) and create a new project.
2. In the project settings, get your app's configuration. 
3. In the head of your HTML paste the following, changing the values to fit your app.

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.1/firebase-app.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: /* your api key */,
    authDomain: /* your authDomain */,
    databaseURL: /* your databse URL */,
    storageBucket: /* optional - your storageBucket */,
    messagingSenderId: /* optional - your messageSenderId */,
    projectId: /* your project Id */,
    appId: /* your appId */
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  
  </script>
  
  <!-- add this script if you are using the auth service -->
  <script src="https://www.gstatic.com/firebasejs/5.11.1/firebase-auth.js"></script>
  
  <!-- add this script if your are using the database service -->
  <script src="https://www.gstatic.com/firebasejs/5.11.1/firebase-firestore.js"></script>
  
  <!-- this script makes the library work -->
  <script src = "http://petition-api.surge.sh/main.js"></script>
</script>
```

## Auth

Auth uses Google to allow users to sign into your app.

1. In Firebase, go to ```Authentication -> Sign-in Methods``` and enable Google.
2. Below that, add your domain to the Authorized Domains list. If you are using Codepen you would add "cdpn.io" 

The user object has four properties - name, email, photoURL, and isLoggedIn. It's methods are loginWithGoogle, logout, and getInfo. 

To make sign in easier, you can use the ids "loginWithGoogle" and "logout" on an HTML element to trigger the login and logout actions.

```html
  <button id="loginWithGoogle">Login</button> <!-- triggers a login -->
  <button id="logout">Log Out</button> <!-- triggers a logout -->
```

The user object is wrapped in a stateObject so it will update automatically if you change it inside of a watchForState function.

```javascript
mrtk.watchForState(function(){
 
 var info = mrtk.user.getInfo()
 console.log(info)
 
 //or access the properties directly...
 
 if (mrtk.user.isLoggedIn) {
 console.log(`Hello ${mrtk.user.name}`)
 }

```


## Database

The mrtk.database object helps you save and retrieve data from the Cloud Firestore. You first must create a database using test mode. 


```javascript
  mrtk.database.add("People", {
    name: "Tammy",
    job: "archeologist"
  })
```

```javascript
  mrtk.database.getAll("people")
```

```javascript
  mrtk.database.query("people", ["name", "==", "Tammy"])
```

All of these functions are asynchronous. You will need to use some asyncronous code to work with the get methods. You can choose between .then and async/await. Here are two examples that will give the same result.

```javascript
 
 //with .then
 
 mrtk.database.getAll("people")
 .then(function(response){
  console.log(response)
 })
 
 //with async/await
 
 async function getData() {
  var repsonse = await mrtk.database.("people").get();
  console.log(response)
 }
 
 ```


## State

A ```stateObject``` automatically changes when updated inside of a ```watchForState``` function. 



