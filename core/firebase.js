import Firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAnyWEP4sFq8F87LXERJoZKlWSW9Cle0DQ",
    authDomain: "softcofee-81f3b.firebaseapp.com",
    databaseURL: "https://softcofee-81f3b.firebaseio.com",
    storageBucket: ""
  };
  
  const app = Firebase.initializeApp(config);

  export default app;


