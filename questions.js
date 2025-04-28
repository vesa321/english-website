// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    document.body.classList.add('loaded');

    // Animate Header
    document.querySelector('.header').style.transform = 'scale(1)';
    document.querySelector('.header').style.opacity = '1';
});

// Typing Loading Text Animation
const loadingText = document.getElementById('loadingText');
let dots = 0;

setInterval(() => {
    dots = (dots + 1) % 4; // 0,1,2,3 and repeat
    loadingText.textContent = 'Loading' + '.'.repeat(dots);
}, 500);

// Animate cards when scrolling
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// Check Exercises
function checkAnswer(inputId, correctAnswer) {
    const input = document.getElementById(inputId).value.trim();
    const result = document.getElementById('result' + inputId.slice(1));
    if (input.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Wrong. Correct: " + correctAnswer;
        result.style.color = "red";
    }
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
