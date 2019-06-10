import firebase from "firebase/app"
import "firebase/app"
import "firebase/database"
import 'firebase/storage';



const config = {
    apiKey: "AIzaSyAXowtJTEaXkyySI0M7i3EOPL_b5LcbugI",
    authDomain: "mancity2907.firebaseapp.com",
    databaseURL: "https://mancity2907.firebaseio.com",
    projectId: "mancity2907",
    storageBucket: "mancity2907.appspot.com",
    messagingSenderId: "857056234893",
    appId: "1:857056234893:web:58c4dc461197ad34"
  };

  firebase.initializeApp(config);

  const firebaseDB= firebase.database();
  const firebaseMatches= firebaseDB.ref("matches");
  const firebasePlayers= firebaseDB.ref("players");

  export {
    firebase,
    firebaseDB,
    firebaseMatches,
    firebasePlayers
  }