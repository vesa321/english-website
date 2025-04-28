// Optional interactivity (like changing text when hovering over cards)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ffe0cc';
    });
    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#feece5';
    });
});

