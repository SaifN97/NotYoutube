import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOMGz2aXEr2x9PhK4_pS4Qgj39o1PMq3o",
  authDomain: "expo-4d617.firebaseapp.com",
  databaseURL: "https://expo-4d617.firebaseio.com",
  projectId: "expo-4d617",
  storageBucket: "expo-4d617.appspot.com",
  messagingSenderId: "160883059401",
  appId: "1:160883059401:web:7efb5090ba135a387a7b18",
  measurementId: "G-RXFE3H1H48",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
