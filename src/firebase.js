// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvnCzJjL34b_iykmt8Hg43CJmlR3Ln30A",
  authDomain: "clone2-6a837.firebaseapp.com",
  databaseURL: "https://clone2-6a837.firebaseio.com",
  projectId: "clone2-6a837",
  storageBucket: "clone2-6a837.appspot.com",
  messagingSenderId: "115653706859",
  appId: "1:115653706859:web:ee45c701fb0460fdec1d2e",
  measurementId: "G-9BB2N1RWP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth};