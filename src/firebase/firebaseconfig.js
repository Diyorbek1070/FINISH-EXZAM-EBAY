import firebase from 'firebase/app';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAu9qMfxyoXMknzIinskZGpDh7S46U-6rY",
    authDomain: "ebayexzam.firebaseapp.com",
    projectId: "ebayexzam",
    storageBucket: "ebayexzam.appspot.com",
    messagingSenderId: "56563535330",
    appId: "1:56563535330:web:bec25230a9c04a730c3dbb",
    measurementId: "G-T09NQHNEJB"
  };


const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}