// script.js

// Wait for the DOM and all resources to load
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay for demonstration (e.g., fetching data)
    setTimeout(() => {
        // Hide the loading overlay
        const loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.opacity = 0; // Smooth transition
        loadingOverlay.style.transition = "opacity 0.5s ease";

        // Remove overlay after transition
        setTimeout(() => {
            loadingOverlay.style.display = "none";
        }, 500);

        // Show the main content
        const mainContent = document.getElementById("main-content");
        mainContent.style.display = "block";
    }, 2000); // Adjust delay as needed (in milliseconds)
});
