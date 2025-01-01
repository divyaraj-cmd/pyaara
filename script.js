// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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

// Calculate love score logic
function calculateLoveScore(name1, name2) {
    let loveScore = 0; // Reset loveScore for each calculation
    const combinedName = name1 + name2;

    for (let i = 0; i < combinedName.length; i++) {
        loveScore += combinedName.charCodeAt(i);
    }
    return loveScore % 101; // Score between 0 and 100
}

// Handle form submission
document.getElementById("loveForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please enter both names.";
        return;
    }

    const loveScore = calculateLoveScore(name1, name2);
    document.getElementById("result").textContent = `Your love score is: ${loveScore}% 💕`;

    // Store the result in Firestore
    try {
        await addDoc(collection(db, "users"), {
            uname: name1,
            cname: name2,
            score: loveScore
        });
        console.log("Love score saved successfully!");
    } catch (error) {
        console.error("Error saving love score: ", error);
    }
});