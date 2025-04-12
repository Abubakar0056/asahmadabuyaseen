// Toggle menu on small screens
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// Highlight active nav link on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
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

  // Optional: close mobile nav on scroll
  navbar.classList.remove("active");
};



// Read More toggle

const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const moreText = this.previousElementSibling.querySelector(".more-text");

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      this.textContent = "Read More";
    } else {
      moreText.style.display = "inline";
      this.textContent = "Read Less";
    }
  });
});


/*============== scroll reveal ======================*/

 ScrollReveal({ 
  reset: true,
  distance: '80px' ,
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


/*============== typed js ======================*/
const typed = new Typed(".multiple-text", {
  strings: [ "Frontend Developer", "Computer Trainer", "Teacher", "Marraige & relationship consultant", "Islamic Educational Consultant"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});




