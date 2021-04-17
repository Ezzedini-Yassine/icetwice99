import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwUMk1H0aiIC6_vQvCtVCdoGqQxGZfdI",
  authDomain: "ecommerce-5981e.firebaseapp.com",
  projectId: "ecommerce-5981e",
  storageBucket: "ecommerce-5981e.appspot.com",
  messagingSenderId: "496692757898",
  appId: "1:496692757898:web:22aa04e656216e1b1ef473",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
