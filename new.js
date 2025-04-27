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
document.getElementById('toggle').addEventListener('click', function () {
    const icon = this;
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
// from here
document.addEventListener('DOMContentLoaded', function() {
    // Target the h1 inside the hero section with id="home"
    var heroSection = document.getElementById('home');
    if (!heroSection) return;
  
    var heading = heroSection.querySelector('h1');
    if (!heading) return;
  
    var text = "Fast & Reliable Courier Services"; // The text you want to animate
    var idx = 0;
  
    // Clear the heading and add a blinking cursor span
    heading.textContent = '';
    var cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    heading.appendChild(cursor);
  
    function typeWriter() {
      if (idx < text.length) {
        heading.insertBefore(document.createTextNode(text.charAt(idx)), cursor);
        idx++;
        setTimeout(typeWriter, 60);
      }
    }
    typeWriter();
  });
  
  
