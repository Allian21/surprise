window.addEventListener("load", function() {
    const letterSection = document.querySelector(".letter-section");
    const questionSection = document.querySelector(".question-section");
    const questionText = document.getElementById("question");
    const responseButtons = document.getElementById("response-buttons");

    // Simulate letter scroll reveal
    setTimeout(() => {
        letterSection.style.opacity = 1;
        letterSection.style.transform = 'translateY(0)';
    }, 500);

    // Show question after scroll
    setTimeout(() => {
        letterSection.style.opacity = 0; // hide the letter section after it's read
        questionText.classList.remove("hidden");
        responseButtons.classList.remove("hidden");
    }, 15000); // Time to read and scroll (adjust as needed)

    // Handle the button clicks
    document.getElementById("yes-btn").addEventListener("click", function() {
        alert("Yay! You said YES! 💕");
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        alert("Oh no! Maybe next time! 😔");
    });
});
