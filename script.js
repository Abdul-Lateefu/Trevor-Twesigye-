// script.js

// Highlight current navigation link based on the current page
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});

// Slideshow for the hero section
let currentImageIndex = 0;
const heroImages = [
    "hero-image1.jpg",  // Replace with actual image paths
    "hero-image2.jpg",
    "hero-image3.jpg"
];

function changeHeroImage() {
    const heroSection = document.querySelector(".hero");
    heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;

    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

// Start the slideshow on page load
setInterval(changeHeroImage, 3000); // Change every 3 seconds
