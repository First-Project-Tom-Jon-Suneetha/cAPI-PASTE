
  var config = {
    apiKey: "AIzaSyBKaHNKheNbN0NmjSzaqs9GBhEu14bXiC0",
    authDomain: "capi-paste-9e165.firebaseapp.com",
    databaseURL: "https://capi-paste-9e165.firebaseio.com",
    projectId: "capi-paste-9e165",
    storageBucket: "capi-paste-9e165.appspot.com",
    messagingSenderId: "846503561187"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var existingEmail = $("#email-text");
var existingPassword = $("#password-text");
var loginBtn = $("#submit-up");

var signupName = $("#user-name");
var signupEmail = $("#signup-email");
var signupPass = $("#signup-password");
var signupBtn = $("#signup-submit");


// Existing user login function
$(loginBtn).on("click", function(){
  event.preventDefault();

	var existingUserEmail = existingEmail.val().trim();
	var existingUserPassword = existingPassword.val().trim();

  console.log(existingUserEmail);
  console.log(existingUserPassword);  

});


var tempUser = {
    "name": "",
    "email": "",
    "password": ""
  };
// New user signup function
$(signupBtn).on("click", function(){
  event.preventDefault();

  var signupUsersName = signupName.val().trim();
  var signupUserEmail = signupEmail.val().trim();
  var signupUserPassword = signupPass.val().trim();

  console.log(signupUsersName);
  console.log(signupUserEmail);
  console.log(signupUserPassword); 

  var newUserObject = {
    "name": signupUsersName,
    "email": signupUserEmail,
    "password": signupUserPassword
  }; 

  dbUsers = firebase.database().ref('/userdata');
  dbCurrentUser = firebase.database().ref('/userdata/' +signupUsersName);

  dbUsers.once("value", snap=>{

    tempUser = snap.val();

    if (snap.hasChild(signupUsersName)){
    // dbCurrentUser.set(newUserObject);
    console.log("exists");
  } else{
    dbCurrentUser.set(newUserObject);
  }
  });

  // if (tempUser.name == signupUsersName || tempUser.email == signupUserEmail){
  //   // dbCurrentUser.set(newUserObject);
  //   console.log("exists");
  // } else{
  //   dbCurrentUser.set(newUserObject);
  // }
});

function createdUser() {
  var pullUserDetails = firebase.ref().child("name");

  console.log(pullUserDetails);

};


// Is logged in true(boolean)
// Propagate logged in user details to the navbar
// Setup a user settings menu with log out working for now
// username stored in firebase should "username"toLowercase();







