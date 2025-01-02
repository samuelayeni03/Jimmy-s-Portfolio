// Toggle Navbar and Hamburger Icon
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active'); // Add this line to toggle the "X" effect
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;

    // Toggle the active class
    faqItem.classList.toggle('active');

    // Close other open FAQs
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});

// Dynamically adjust the horizontal line width on scroll
const faqLines = document.querySelectorAll('.faq-line');

// Function to calculate the percentage of scroll for each element
function adjustLinesOnScroll() {
  faqLines.forEach((line) => {
    const rect = line.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculate the scroll percentage for the element
      const scrollPercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      // Set the width of the line based on the scroll percentage
      line.style.width = `${scrollPercentage * 100}%`;
    } else {
      // Reset width if out of view
      line.style.width = `0`;
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', adjustLinesOnScroll);

// Trigger once on load to initialize the lines
adjustLinesOnScroll();

//animation slider...
const slider = document.querySelector('.skills-slider');

// Get all skill items in the slider
const skillsSlider = document.querySelector(".skills-slider");
const items = skillsSlider.innerHTML;
skillsSlider.innerHTML += items; 


$( function() {
  $( ".glitch-img" ).mgGlitch({
        // set 'true' to stop the plugin
        destroy : false, 
        // set 'false' to stop glitching
        glitch: true, 
        // set 'false' to stop scaling
        scale: true, 
        // set 'false' to stop glitch blending
        blend : true, 
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin : 10, 
        // set max time for glitch 1 elem
        glitch1TimeMax : 100,
        // set min time for glitch 2 elem
        glitch2TimeMin : 10, 
        // set max time for glitch 2 elem
        glitch2TimeMax : 300, 
  });
});

