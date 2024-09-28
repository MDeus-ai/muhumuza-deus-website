document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("muhum_deus_ai_text");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    nameElement.appendChild(cursor);

    const name = "Muhumuza Deus";
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeName, 200); // Adjust speed of typing here
        } else {
            console.log("Typing effect completed, starting icon switch...");
            // Start staggered icon switching after typing effect is done
            startIconSwitching();
        }
    }

    // Array of icons to transition to
    const icons = [
        'Assets/icons/ai-brain_16320868.png',
        'Assets/icons/analytics_921591.png',
        'Assets/icons/books_3771417.png',
        'Assets/icons/brainstorming_1232901.png',
        'Assets/icons/coding_1802659.png',
        'Assets/icons/coding_7245951.png',
        'Assets/icons/dashboard_2328966.png',
        'Assets/icons/database_12177194.png',
        'Assets/icons/database_12177194.png',
        'Assets/icons/neural_2103658.png',
        'Assets/icons/robot_6062132.png'
    ];

    // Select the three icon placeholders
    const iconElements = [
        document.getElementById('icon1'),
        document.getElementById('icon2'),
        document.getElementById('icon3')
    ];

    // Function to start staggered icon switching with unique icons
    function startIconSwitching() {
        // Array to track currently displayed icons to avoid duplicates
        let currentIcons = [];

        // Function to switch icon in a specific element
        function switchIcon(iconElement, delay) {
            function changeIcon() {
                // Get a unique random icon that is not currently displayed
                let availableIcons = icons.filter(icon => !currentIcons.includes(icon));
                let randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];

                // Update the element's background image with the new icon
                iconElement.style.transition = 'background-image 1s ease';
                iconElement.style.backgroundImage = `url('${randomIcon}')`;

                // Update the current icons array (remove old icon, add new one)
                const oldIcon = iconElement.style.backgroundImage.slice(5, -2); // Extract the URL
                currentIcons = currentIcons.filter(icon => icon !== oldIcon); // Remove old icon
                currentIcons.push(randomIcon); // Add new icon

                // Ensure that currentIcons array doesn't exceed the number of icon placeholders
                if (currentIcons.length > iconElements.length) {
                    currentIcons.shift(); // Remove the first element to prevent overflow
                }

                // Continue switching the icon after the delay
                setTimeout(changeIcon, delay);
            }

            // Start changing icons for the first time
            setTimeout(changeIcon, delay);
        }

        // Start switching icons at staggered intervals for each placeholder
        switchIcon(iconElements[0], 5000); // 1st icon changes every 2 seconds
        switchIcon(iconElements[1], 6000); // 2nd icon changes every 3 seconds
        switchIcon(iconElements[2], 7000); // 3rd icon changes every 4 seconds
    }

    // Start the typing animation
    typeName();
});
