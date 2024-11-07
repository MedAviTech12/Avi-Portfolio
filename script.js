// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.classList.remove("show"); // Remove active state from all sections
        section.style.display = "none"; // Hide all sections
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block"; // Temporarily display to enable transition
    setTimeout(() => activeSection.classList.add("show"), 10); // Delay to apply animation
}

// Function to toggle between dark and light modes
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    
    // Update localStorage with the current theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    
    // Update the toggle button icon
    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.textContent = isDarkMode ? "☀️" : "🌙";
}

// Function to initialize theme based on saved preference
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").textContent = "☀️";
    } else {
        document.getElementById("theme-toggle").textContent = "🌙";
    }
}

// Run the theme initializer on page load
document.addEventListener("DOMContentLoaded", initializeTheme);

// Add event listener for the theme toggle button
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
