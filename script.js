// Get elements
const okBtn = document.getElementById('ok-btn');
const noBtn = document.getElementById('no-btn');
const questionBox = document.getElementById('question-box');
const successMessage = document.getElementById('success-message');
const buttonsContainer = document.querySelector('.buttons-container');

// Function to move the "No" button to a random position
function moveNoButton() {
    const container = buttonsContainer.getBoundingClientRect();
    const button = noBtn.getBoundingClientRect();
    
    // Calculate available space
    const maxX = container.width - button.width;
    const maxY = container.height - button.height;
    
    // Generate random position within the container
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply new position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Initialize the "No" button position
function initializeNoButton() {
    const container = buttonsContainer.getBoundingClientRect();
    const button = noBtn.getBoundingClientRect();
    
    // Position it to the right of OK button initially
    noBtn.style.left = (container.width / 2 + 20) + 'px';
    noBtn.style.top = '0px';
}

// Event listeners for desktop (hover)
noBtn.addEventListener('mouseenter', moveNoButton);

// Event listener for keyboard navigation (accessibility)
noBtn.addEventListener('focus', moveNoButton);

// Event listeners for mobile (touch)
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Try to click the No button (but it will move away)
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

// OK button click - show success message
okBtn.addEventListener('click', function() {
    questionBox.classList.add('hidden');
    successMessage.classList.remove('hidden');
});

// Initialize on page load
window.addEventListener('load', initializeNoButton);

// Reinitialize on window resize
window.addEventListener('resize', initializeNoButton);
