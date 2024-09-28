document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card'); // Select all cards

    // Create an Intersection Observer to detect when cards are in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class when the card comes into view
                entry.target.classList.add('show');
            } else {
                // Optional: Remove the 'show' class when it leaves the view
                entry.target.classList.remove('show');
            }
        });
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Typing \.Hey
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("Hey");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    nameElement.appendChild(cursor);

    const name = ".\\Hey"; // Text to type
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeName, 400); // Adjust typing speed here
        } else {
            console.log("Typing effect completed.");
        }
    }

    // Intersection Observer to detect when the card is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeName();
                observer.unobserve(entry.target);
            }
        });
    });

    const cardElement = document.querySelector('.card-content');
    observer.observe(cardElement);
});

