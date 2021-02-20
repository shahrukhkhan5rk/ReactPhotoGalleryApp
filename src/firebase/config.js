import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBpuNykkq_hGHZxd8RwtWI9k9PNexmEyo",
    authDomain: "photogallery5rk.firebaseapp.com",
    projectId: "photogallery5rk",
    storageBucket: "photogallery5rk.appspot.com",
    messagingSenderId: "171016137622",
    appId: "1:171016137622:web:5a7390faf10ae41797cbb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};