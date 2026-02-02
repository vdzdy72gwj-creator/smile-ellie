const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => {
    message.textContent = 'Yay! You smiled! 😊🎉';
    message.classList.add('celebration');
    noBtn.style.display = 'none';
    yesBtn.textContent = 'Thank you! 💕';
});

noBtn.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate available space for the button to move
    const maxX = containerRect.width - btnRect.width - 100; // 100px padding from edges
    const maxY = 150; // vertical range
    
    // Generate random position
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    // Apply the new position
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Also move on touch for mobile devices
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 100;
    const maxY = 150;
    
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
