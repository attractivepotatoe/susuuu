function startCountdown() {
    const countdownText = document.getElementById("countdown-text");
    const countdown = document.getElementById("countdown");
    const surprises = document.querySelectorAll(".surprise-link");

    // Set your start date for the countdown
    let startDate = new Date("2025-02-24T00:00:00"); // Example: change this date as needed
    let now = new Date();
    let timeDifference = startDate - now;

    if (timeDifference > 0) {
        countdownText.innerHTML = "Countdown to Start!";
        function updateCountdown() {
            let currentTime = new Date();
            let timeRemaining = startDate - currentTime;

            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
            let seconds = Math.floor((timeRemaining / 1000) % 60);

            countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (timeRemaining <= 0) {
                countdown.innerHTML = "🎁 Countdown Started!";
                clearInterval(interval);
                startSurpriseCountdown();
            }
        }
        updateCountdown();
        let interval = setInterval(updateCountdown, 1000);
    } else {
        startSurpriseCountdown();
    }

    // Function to handle surprise countdown once the main countdown ends
    function startSurpriseCountdown() {
        let midnight = new Date();
        midnight.setHours(24, 0, 0, 0); // Set to the next midnight

        function updateCountdown() {
            let currentTime = new Date();
            let timeRemaining = midnight - currentTime;

            let hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
            let seconds = Math.floor((timeRemaining / 1000) % 60);

            countdown.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

            if (timeRemaining <= 0) {
                countdown.innerHTML = "🎁 Surprise Unlocked!";
                clearInterval(interval);
            }
        }
        updateCountdown();
        let interval = setInterval(updateCountdown, 1000);
    }

    // Display the surprise links based on the days passed
    let daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    for (let i = 0; i <= daysPassed; i++) {
        if (surprises[i]) {
            surprises[i].style.display = "block";
        }
    }
}

function generateHearts() {
    const heartContainer = document.getElementById("heart-container");
    const totalHearts = 20; // Adjust the number of hearts
    for (let i = 0; i < totalHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Randomize position within the viewport
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;

        heart.style.left = `${randomLeft}vw`;
        heart.style.top = `${randomTop}vh`;

        // Randomize animation duration for variety
        const randomDuration = Math.random() * 4 + 3; // Between 3s and 7s
        heart.style.animationDuration = `${randomDuration}s`;

        heartContainer.appendChild(heart);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    startCountdown();
    generateHearts(); // Generate random hearts on page load
});
