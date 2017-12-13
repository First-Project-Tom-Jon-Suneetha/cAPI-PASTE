
  var config = {
    apiKey: "AIzaSyBKaHNKheNbN0NmjSzaqs9GBhEu14bXiC0",
    authDomain: "capi-paste-9e165.firebaseapp.com",
    databaseURL: "https://capi-paste-9e165.firebaseio.com",
    projectId: "capi-paste-9e165",
    storageBucket: "",
    messagingSenderId: "846503561187"
  };
  firebase.initializeApp(config);

var textEmail = document.getElementById("#user-email");
var textPassword = document.getElementById("#user-password");
var loginBtn = document.getElementById("#button-login");

$(loginBtn).on("click", function(e){
	textEmail.val().trim();
	textPassword.val().trim();
})



  https://capi-paste-9e165.firebaseapp.com/__/auth/handler

// USER CREATES NEW ACCOUT
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
email.html

// USER SIGNS IN WITH EXISTING ACCOUT
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
email.html

// GLOBAL OBSERVER FOR GETTING DETAILS ABOUT THE USER THROUGHOUT THE SITE
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
email.html

var provider = new firebase.auth.GithubAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

// REDIRECT SIGN IN
firebase.auth().signInWithRedirect(provider);

// GET REDIRECT RESULTS
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});















