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
  const txtName= document.getElementById('textNombre');
  const birthD= document.getElementById('datetime');

const bttnSU= document.getElementById('bttnSingUp');

bttnSU.addEventListener('click', e=>{
//Get email and password
  const email= txtEmail.value;
  const pass= txtPass.value;
  const auth= firebase.auth();

//Sign Up
const promise=auth.createUserWithEmailAndPassword(email,pass);
console.log("hola");
console.log(e.message);
promise.catch(e=>console.log(e.message));
});



//Real time listener
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    //console.log(firebaseUser);
  }else{
    console.log('not logged in');
  }
});



function submitClick(){
	//Upload users and docuements


	var firebaseRef=firebase.database().ref('user/');
		firebaseRef.push({
		name:txtName.value,
		mail:txtEmail.value,
    birthday:birthD.value,
	});
}
