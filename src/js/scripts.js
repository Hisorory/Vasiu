document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Web Developer",
        "Graphic Designer",
        "Project Manager"
    ];

    let currentIndex = 0;
    const textElement = document.getElementById("text");

    function updateText() {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];
    }

    setInterval(() => {
        updateText();
    }, 4000); // Alle 2.5 Sekunden den Text ändern
    updateText(); // Initiales Update, um den ersten Text zu setzen
});
