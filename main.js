// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
});

// Sidebar navigation links
const links = document.querySelectorAll(".Links li");

// Function to navigate slides
function Navigate(index) {
  swiper.slideTo(index);
  updateActiveLink(index);
}

// Update active link on click or slide change
function updateActiveLink(index) {
  links.forEach((link, i) => {
    link.classList.toggle("activeLink", i === index);
  });
}

// Change active link when slide changes manually
swiper.on("slideChange", () => {
  updateActiveLink(swiper.activeIndex);
});

// Optional: Add hover sound or animations (example)
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.05)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});

// Optional: Handle “Scroll for next slide” click or keypress
document.querySelectorAll(".slide-help").forEach((el) => {
  el.addEventListener("click", () => {
    swiper.slideNext();
  });
});
