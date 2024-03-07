// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7D2Y96bwkz0lVNf0hZ1h3Y-e0ZYQE9-0",
    authDomain: "todo-list-7a9a6.firebaseapp.com",
    projectId: "todo-list-7a9a6",
    storageBucket: "todo-list-7a9a6.appspot.com",
    messagingSenderId: "142545043043",
    appId: "1:142545043043:web:e888108081232bddc60256",
    measurementId: "G-CV9T02ZF49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);