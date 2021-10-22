import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDeWTQfiPCbSigsRNjBp_MAq1AProaadA",
    authDomain: "email-client-7fd52.firebaseapp.com",
    projectId: "email-client-7fd52",
    storageBucket: "email-client-7fd52.appspot.com",
    messagingSenderId: "290464012650",
    appId: "1:290464012650:web:bfd29186559fcb506d2d13",
    measurementId: "G-2GP1K2WLF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};