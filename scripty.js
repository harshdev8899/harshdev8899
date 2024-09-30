document.addEventListener("DOMContentLoaded", function() {
    const landing = document.getElementById('landing');
    const portfolio = document.getElementById('portfolio');
    const enterButton = document.getElementById('enter-btn');
  
    // Event listener for the enter button
    enterButton.addEventListener('click', function() {
      landing.classList.add('hidden'); // Hide landing page
      portfolio.classList.remove('hidden'); // Show portfolio page
  
      // Fade-in effect for portfolio sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        section.classList.add('fade-in'); // Apply fade-in class immediately
        setTimeout(() => {
          section.style.opacity = 1; // Set opacity to 1 after delay
        }, index * 200); // Stagger the fade-in effect
      });
    });
  });