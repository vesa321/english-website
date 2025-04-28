// Function to check answers
function checkAnswers() {
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    const q3 = document.getElementById('q3').value.trim().toLowerCase();
    const q4 = document.getElementById('q4').value.trim().toLowerCase();
    const q5 = document.getElementById('q5').value.trim().toLowerCase();
    const result = document.getElementById('result');

    if (q1 === "likes" && q2 === "go" && q3 === "eat" && q4 === "works" && q5 === "rises") {
        result.textContent = "Awesome! 🎉 You got all correct!";
        result.style.color = "#28a745"; // green
    } else {
        result.textContent = "Hmm, some answers are incorrect. 🤔 Try again!";
        result.style.color = "#dc3545"; // red
    }
}
