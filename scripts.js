// Function to open the side navigation bar
function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "50%";
}

// Function to close the side navigation bar
function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0%";
}

// Selecting the theme toggle button and the body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Toggling dark mode class on body and other elements
    body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    
    // Toggle dark mode on all boxes
    document.querySelectorAll('.box').forEach(box => {
        box.classList.toggle('dark-mode');
    });

    // Toggle dark mode on the footer
    document.querySelector('footer').classList.toggle('dark-mode');

    // Toggle icon between moon and sun
    if (themeToggleButton.textContent === '🌙') {
        themeToggleButton.textContent = '☀️';
    } else {
        themeToggleButton.textContent = '🌙';
    }
});
