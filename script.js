// // Smooth scrolling for navigation links
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Scroll smoothly to the section
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Apply the stored mode on page load
window.onload = function() {
    const storedMode = sessionStorage.getItem('themeMode');
    
    // If a mode is stored in sessionStorage, apply it
    if (storedMode) {
        document.body.classList.add(storedMode);
    } else {
        // Default to dark mode if no mode is stored
        document.body.classList.add('dark-mode');
    }
};

// Toggle between dark and light modes and store the preference in sessionStorage
function toggleMode() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        sessionStorage.setItem('themeMode', 'light-mode'); // Store light mode in sessionStorage
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        sessionStorage.setItem('themeMode', 'dark-mode'); // Store dark mode in sessionStorage
    }
}

function toggleMenu() {
    console.log("Button clicked");
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

