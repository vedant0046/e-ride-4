import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAIiT3KwRhR5AjaGBU7S4MmQ6lsnRufi5g",
    authDomain: "project-71-ecb10.firebaseapp.com",
    projectId: "project-71-ecb10",
    storageBucket: "project-71-ecb10.appspot.com",
    messagingSenderId: "55395364189",
    appId: "1:55395364189:web:3438bcb7ab6b95b151ccb4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
