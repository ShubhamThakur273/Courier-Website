document.getElementById('toggle').addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode for header and footer
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    // Optionally, save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
    }
});
// from here
