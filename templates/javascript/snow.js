document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const maxSnowflakes = 300;  // Maximum number of snowflakes in the DOM at once

    // Function to create and animate a single snowflake
    function createSnowflake() {
        if (snowflakesContainer.children.length >= maxSnowflakes) {
            snowflakesContainer.removeChild(snowflakesContainer.firstChild);
        }

        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomise snowflake's horizontal position, animation duration, and size
        const xPosition = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 3 + 5;
        const snowflakeSize = Math.random() * 3 + 3;

        // Set the initial position just above the viewport (had to do this due to snow generating in frame)
        const startPosition = Math.random() * 100;
        snowflake.style.left = `${xPosition}px`;
        snowflake.style.top = `-${startPosition}px`;

        // Set the random size for the snowflake
        snowflake.style.width = `${snowflakeSize}px`;
        snowflake.style.height = `${snowflakeSize}px`;

        // Apply animation properties
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = 'linear';
        snowflake.style.animationIterationCount = 'infinite'; // Ensure it repeats infinitely

        // Append snowflake to the container
        snowflakesContainer.appendChild(snowflake);

        // Remove snowflake after it falls off the screen
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    setInterval(createSnowflake, 100);
});
