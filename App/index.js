// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9DtEoLmYuF2htW7U_3OTO3mAljDLdQhc",
    authDomain: "capitalshopvn.firebaseapp.com",
    projectId: "capitalshopvn",
    storageBucket: "capitalshopvn.appspot.com",
    messagingSenderId: "636089892220",
    appId: "1:636089892220:web:809ac868bd7a8add2f78f9",
    measurementId: "G-Y69SR66DZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);