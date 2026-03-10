// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const heroBtn = document.querySelector(".hero-btn");
  heroBtn.addEventListener("click", () => {
    alert("You clicked Get Started!");
  });
});
const portfolioBtns = document.querySelectorAll(".btn");
portfolioBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`You clicked ${btn.textContent}`);
  });
});
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting automatically
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  if (name === "" || email === "") {
    alert("Please fill all fields");
  } else {
    alert("Form submitted!");
    contactForm.reset();
  }
});
const heroText = document.querySelector(".hero h1");
heroText.style.opacity = 0;
window.addEventListener("load", () => {
  heroText.style.transition = "opacity 2s";
  heroText.style.opacity = 1;
});