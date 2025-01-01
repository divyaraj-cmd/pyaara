// loveScore.js
import { db } from './firebaseConfig.js'; // Import the Firestore instance
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

export function calculateLoveScore(name1, name2) {
    let loveScore = 0; // Reset loveScore for each calculation
    const combinedName = name1 + name2;

    for (let i = 0; i < combinedName.length; i++) {
        loveScore += combinedName.charCodeAt(i);
    }
    return loveScore % 101; // Score between 0 and 100
}

// Function to format names
export function formatName(name) {
    if (!name) return ""; // Return empty string if name is empty
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export async function storeLoveScore(name1, name2, loveScore) {
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
}