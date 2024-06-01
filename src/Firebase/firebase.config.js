// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_uhxYXvZMklSGAw_heVKh6yZ3OkbnOs",
  authDomain: "assetflow-2ac74.firebaseapp.com",
  projectId: "assetflow-2ac74",
  storageBucket: "assetflow-2ac74.appspot.com",
  messagingSenderId: "812195092713",
  appId: "1:812195092713:web:456f2586f5a79dabd27878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth