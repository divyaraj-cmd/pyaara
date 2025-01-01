// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqQTbqgQ6ts2FCeRfD3ggmuXaPcemFhVw",
    authDomain: "love-calculator-database.firebaseapp.com",
    projectId: "love-calculator-database",
    storageBucket: "love-calculator-database.firebasestorage.app",
    messagingSenderId: "291603219197",
    appId: "1:291603219197:web:b70d98e34772dce87ab494",
    measurementId: "G-01EL95XST1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }; // Export the Firestore database instance