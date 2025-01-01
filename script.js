function calculateLoveScore(name1, name2) {
    const combinedName = name1 + name2;
    let loveScore = 0;
    for (let i = 0; i < combinedName.length; i++) {
        loveScore += combinedName.charCodeAt(i);
    }
    return loveScore % 101; // Score between 0 and 100
}

document.getElementById("loveForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please enter both names.";
        return;
    }

    const loveScore = calculateLoveScore(name1, name2);
    document.getElementById("result").textContent = `Your love score is: ${loveScore}% 💕`;
});