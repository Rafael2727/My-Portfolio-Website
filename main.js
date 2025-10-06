  document.addEventListener("DOMContentLoaded", () => {
      const swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: { enabled: true },
        mousewheel: true,
      });

      // Navigation handling
      const navItems = document.querySelectorAll(".Links li");
      window.Navigate = (index) => {
        swiper.slideTo(index);
        navItems.forEach((li, i) => li.classList.toggle("activeLink", i === index));
      };

      swiper.on("slideChange", () => {
        const active = swiper.activeIndex;
        navItems.forEach((li, i) => li.classList.toggle("activeLink", i === active));
      });
    });