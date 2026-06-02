// Smooth scroll
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll reveal
const sections = document.querySelectorAll("section, .about, .menu, .gallery, .contact");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});

// Active nav link highlight
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 120;
    if(scrollY >= sectionTop) currentSection = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("action");
    if(link.getAttribute("href") === `#${currentSection}`){
      link.classList.add("action");
    }
  });
});

// Back to top button
const backTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if(window.scrollY > 500){
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});
