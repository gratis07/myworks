// Get references to the buttons and image
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const valentineImage = document.getElementById('valentineImage');
const celebration = document.getElementById('celebration');

// Track the size of the "Yes" button
let yesButtonSize = 1.2; // Initial font size

// Function to move the "No" button randomly
function moveNoButton() {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const noButtonRect = noButton.getBoundingClientRect();

  // Calculate random positions within the container
  const maxX = containerRect.width - noButtonRect.width;
  const maxY = containerRect.height - noButtonRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Move the "No" button to the new position
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Function to create celebration emojis
function createCelebration() {
  const emojis = ["💑", "😘", "❤️", "🥰", "💏", "🎉", "✨", "🌸", "💕", "🌹"]; // More emojis
  for (let i = 0; i < 100; i++) { // More emojis for a vibrant effect
    const emoji = document.createElement("span");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.animationDelay = `${Math.random() * 3}s`; // Faster animation
    emoji.style.fontSize = `${Math.random() * 3 + 2}rem`; // Random size for emojis
    celebration.appendChild(emoji);
  }

  // Remove emojis after animation ends
  setTimeout(() => {
    celebration.innerHTML = "";
  }, 5000); // Adjust timing to match animation duration
}

// Function to create fireworks
function createFireworks() {
  confetti({
    particleCount: 150, // Number of particles
    spread: 180, // Spread of the fireworks
    origin: { y: 0.6 }, // Start from the bottom
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'], // Colorful fireworks
  });
}

// Add event listener to the "No" button for hover
noButton.addEventListener('mouseover', () => {
  moveNoButton(); // Move the "No" button when the cursor hovers over it
});

// Add event listener to the "No" button for click
noButton.addEventListener('click', () => {
  alert("Are you sure? 🥺"); // Show a cute alert
  yesButtonSize += 0.6; // Increase the size of the "Yes" button
  yesButton.style.fontSize = `${yesButtonSize}rem`; // Apply the new size
  moveNoButton(); // Move the "No" button again after clicking
});

// Add event listener to the "Yes" button
yesButton.addEventListener('click', () => {
  alert("I know you will say yes!.. 💖"); // Show a happy message
  createCelebration(); // Start the celebration with emojis
  createFireworks(); // Start the fireworks
});

// Move the