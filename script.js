// script.js
import { calculateLoveScore, storeLoveScore, formatName } from './loveScore.js';

document.getElementById("loveForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    // Format names before using them
    const name1 = formatName(document.getElementById("name1").value.trim());
    const name2 = formatName(document.getElementById("name2").value.trim());

    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please enter both names.";
        return;
    }

    // Calculate love score using formatted names
    const loveScore = calculateLoveScore(name1, name2);
    document.getElementById("result").textContent = `Your love score is: ${loveScore}% 💕`;

    // Store the result in Firestore
    await storeLoveScore(name1, name2, loveScore);
});

const elements = document.getElementsByClassName("textin");

// Add a click event listener to each element
for (let element of elements) {
    element.addEventListener("click", function(event) {
        document.getElementById("result").textContent = "";
    });
}