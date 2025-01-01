 
 // script.js
import { calculateLoveScore, storeLoveScore } from './loveScore.js';

document.getElementById("loveForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please enter both names.";
        return;
    }

    const loveScore = calculateLoveScore(name1, name2);
    document.getElementById("result").textContent = `Your love score is ${loveScore}% 💕`;
});