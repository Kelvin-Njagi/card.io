// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 85%)`;
            card.style.backgroundColor = randomColor;
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = 'white';
        });

        const detailsButton = card.querySelector('.details-button');
        const details = card.querySelector('.details');

        detailsButton.addEventListener('click', (event) => {
            event.stopPropagation();
            details.classList.toggle('active');
        });
    });
});