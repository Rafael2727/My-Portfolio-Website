// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
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
  // Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('aside');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  document.body.classList.toggle('menu-open');

  // Toggle icon between bars and close (X)
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close sidebar when a link is clicked
document.querySelectorAll('.Links li').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    document.body.classList.remove('menu-open');
    const icon = menuToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});


  // Sidebar navigation links
  const links = document.querySelectorAll(".Links li");

  // Function to navigate slides
  window.Navigate = function (index) {
    swiper.slideTo(index);
    updateActiveLink(index);
  };

  // Update active link styling
  function updateActiveLink(index) {
    links.forEach((link, i) => {
      link.classList.toggle("activeLink", i === index);
    });
  }

  // Sync sidebar highlight with Swiper's active slide
  swiper.on("slideChange", () => {
    updateActiveLink(swiper.activeIndex);
  });

  // Add simple hover animation (scaling effect)
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.05)";
      link.style.transition = "transform 0.2s ease";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });

  // Click on "Scroll for next slide" text moves to next slide
  document.querySelectorAll(".slide-help").forEach((el) => {
    el.addEventListener("click", () => swiper.slideNext());
  });

  // ✅ Optional: Make sure Swiper resizes smoothly on window resize
  window.addEventListener("resize", () => {
    swiper.update();
  });
});
