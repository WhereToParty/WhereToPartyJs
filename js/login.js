const config = {
  apiKey: "AIzaSyAFli9oMizfawMcvVlhOilLEpmNtECQpY8",
  authDomain: "where-2-party.firebaseapp.com",
  databaseURL: "https://where-2-party.firebaseio.com",
  projectId: "where-2-party",
  storageBucket: "",
  messagingSenderId: "686837040712",
  appId: "1:686837040712:web:15268185f20b9c71e97a7d"
  };
  
firebase.initializeApp(config);
const txtEmail= document.getElementById('textEmail');
const txtPass= document.getElementById('textPass');
const bttnSU= document.getElementById('bttnLogin');

//Real time listener
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    //console.log(firebaseUser);
  }else{
    console.log('not logged in');
  }
});

function loginClick(){
        firebase.auth().signInWithEmailAndPassword(txtEmail.value, txtPass.value).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
	
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
    // User is signed in.
			var displayName = user.displayName;
			var email = user.email;
    // ...
			console.log(email);
		}else {
    // User is signed out.
    // ...
		}
	});	
}

