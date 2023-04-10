/*========= typing animation =========*/
var typed = new Typed(".multiple-text", {
  strings: ["Mateo Telleria", "a programmer"],
  startDelay: 500,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*========= menu icon navbar =========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========= scroll section active link =========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========= sticky navbar =========*/
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 50);

  /*========= remove icon navbar when click navbar link (scroll) =========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========= read more read less =========*/
const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const readMoreId = this.getAttribute("data-readmore-id");
    const moreText = document.querySelector(
      `.more-text[data-readmore-id="${readMoreId}"]`
    );
    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
      this.textContent = "Read More";
    } else {
      this.textContent = "Read Less";
    }
  });
});

/*========= swiper =========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*========= dark light mode =========*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*========= scroll reveal =========*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading, .portfolio h3", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img .services-container, .portfolio-box, .testimonial-wrapper, contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
