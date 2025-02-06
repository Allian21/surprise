window.addEventListener("load", function() {
    const letterSection = document.querySelector(".letter-section");
    const questionText = document.getElementById("question");
    const responseButtons = document.getElementById("response-buttons");
    const flowerContainer = document.querySelector(".flower-container");

    setTimeout(() => {
        letterSection.style.opacity = 1;
        letterSection.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        letterSection.style.opacity = 0;
        questionText.classList.remove("hidden");
        responseButtons.classList.remove("hidden");
        createFlowers(); // Start flower animation
    }, 15000);

    function createFlowers() {
        for (let i = 0; i < 20; i++) {
            let flower = document.createElement("div");
            flower.className = "flower";
            flower.style.left = `${Math.random() * 100}vw`;
            flower.style.animationDuration = `${2 + Math.random() * 3}s`;
            flower.innerHTML = "🌸";
            flowerContainer.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 5000);
        }
    }

    document.getElementById("yes-btn").addEventListener("click", function() {
        alert("Yay! You said YES! 💕");
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        alert("Oh no! Maybe next time! 😔");
    });
});
window.addEventListener("load", function() {
    const flowerContainer = document.createElement("div");
    flowerContainer.className = "flower-background";
    document.body.appendChild(flowerContainer);

    const flowerTypes = ["🌸", "🌺", "🌷", "🌻", "🌹"]; // Different flowers

    function createBackgroundFlowers() {
        for (let i = 0; i < 25; i++) { // Increased number of flowers
            let flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)]; // Random flower
            flower.style.left = `${Math.random() * 100}vw`;
            flower.style.top = `${Math.random() * 100}vh`;
            flower.style.fontSize = `${1.5 + Math.random() * 1.5}em`; // Random sizes
            flower.style.animationDuration = `${10 + Math.random() * 5}s`; // Different floating speeds
            flower.style.opacity = `${0.2 + Math.random() * 0.5}`; // Vary opacity
            flowerContainer.appendChild(flower);
        }
    }

    createBackgroundFlowers();
});


