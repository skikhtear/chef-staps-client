// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRXhMr8_VQe9SPmklsRsov6A7Yt07yw6A",
    authDomain: "chef-steps.firebaseapp.com",
    projectId: "chef-steps",
    storageBucket: "chef-steps.appspot.com",
    messagingSenderId: "384803636558",
    appId: "1:384803636558:web:110eb9a1970f84fbe64a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;