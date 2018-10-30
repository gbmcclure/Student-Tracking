function callGoogleSignIn(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
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
    });
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
        // After successful login, user will be redirected to home.html.
        window.location = 'home.html'; 
        console.log('Log-in authentication successful.');
      }
    });
  }
  else{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('Sign-out was successful.');
    }).catch(function(error) {
      // An error happened.
      console.log('Sign-out was unsuccessful.');
    });
    //console.log('Unsuccessful log-in.');
  }
}