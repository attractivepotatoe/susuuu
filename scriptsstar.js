class RandomCoordinates {
    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}


class ShootingStar {
    constructor() {
        this.star = document.createElement('div');
        this.star.classList.add('star');

        this.start = new RandomCoordinates();

        this.setStyles();
    }

    setStyles() {
        this.setNewStyleVar('--start-x', this.start.x);
        this.setNewStyleVar('--start-y', this.start.y);

        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's'); 

        this.setNewStyleVar('--delay', Math.random() + 's');

        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--left', Math.random() * 100 - 30+ '%');

        this.setNewStyleVar('--size', Math.random() + 0.5);

        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg');
    }

    setNewStyleVar(styleName, styleValue) {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star;
    }
}

new ShootingStar();

class NightSky {
    constructor() {
        this.nightSky = document.getElementById('night-sky');

        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars'));
        this.addStars(this.numberOfStars);
    }

    addStars(numberOfStars) {
        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(new ShootingStar().getStar());
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "I'm always here for you :3",
        "You're doing great, keep it up :D!!",
        "I believe in you! :D",
        "Everything will be okokokokokok :p",
        "You're so strong :D!!",
        "you got this 🌸",
        "I'm so proud of you :3",
        "Sending you a big huggiiieee :D"
    ];

    const comfortMessageDiv = document.getElementById("comfort-message");

    function showRandomMessage() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        comfortMessageDiv.textContent = randomMessage;

        comfortMessageDiv.style.opacity = 1; // Fade in

        setTimeout(function () {
            comfortMessageDiv.style.opacity = 0; // Fade out
        }, 4000); // The message stays visible for 4 seconds
    }

    // Show the first message right away
    showRandomMessage();

    // Show a new message every 6 seconds
    setInterval(showRandomMessage, 6000);
});

new NightSky();
