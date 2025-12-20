// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9GF5buXvSOCK3K9vk0VXOtk0Ap_G01I",
  authDomain: "bloodsonation-a11.firebaseapp.com",
  projectId: "bloodsonation-a11",
  storageBucket: "bloodsonation-a11.firebasestorage.app",
  messagingSenderId: "1061809656426",
  appId: "1:1061809656426:web:2977d73ad4626cc400f013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
export default auth;