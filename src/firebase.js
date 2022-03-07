// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain: "fir-react-app-183c8.firebaseapp.com",
  projectId: "fir-react-app-183c8",
  storageBucket: "fir-react-app-183c8.appspot.com",
  messagingSenderId: "130902131849",
  appId: "1:130902131849:web:50887fa927c1c6d1f53258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);