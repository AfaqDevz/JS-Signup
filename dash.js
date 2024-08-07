import { auth, app } from "./firebase.mjs";
import { signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let logoutbtn = document.getElementById('logoutbtn');


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      loggedIn()
    } else {
      // User is signed out
      // ...
      window.location.href = 'index.html'
    }
  });

  logoutbtn.addEventListener('click', function(){

    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      window.location.href = 'index.html'
      
    }).catch((error) => {
      // An error happened.
    });
    })  


function loggedIn() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged in!",
        showConfirmButton: false,
        timer: 1000
    });
}
