// JavaScript to toggle examples
const showExamplesBtn = document.getElementById('showExamplesBtn');
const examplesDiv = document.getElementById('examples');

showExamplesBtn.addEventListener('click', () => {
    examplesDiv.classList.toggle('hidden');
    if (!examplesDiv.classList.contains('hidden')) {
        examplesDiv.style.animation = "fadeIn 1s ease forwards";
    }
    showExamplesBtn.textContent = examplesDiv.classList.contains('hidden') ? "Show Examples 📖" : "Hide Examples 🙈";
});
