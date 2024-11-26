document.getElementById("comfortButton").addEventListener("click", function () {
    alert("Thank you! Let's make everything better.");
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById("confetti");
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");

        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() + "s";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#900C3F", "#C70039"];
    return colors[Math.floor(Math.random() * colors.length)];
}
