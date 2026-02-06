// C:\Users\USER\Documents\chris FOLDER\healthcare\header.js


const data = `
  <img src="./assets/icons/iaomai_logo_-rvm.png" class="icons-l" alt="">

  <button class="hamburger" id="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav id="nav-menu">
    <ul class="d-flexx">
      <li><a href="./index.html">Home</a></li>
      <li><a href="./about.html">About Us</a></li>
      <li><a href="./services.html">Services</a></li>
      <li><a href="./staffs.html">Staffs</a></li>
      <li><a href="./blog.html">Blog</a></li>
    </ul>
  </nav>

  <a href=""><button class="normal">Get started</button></a>
`;

document.getElementById("header").innerHTML = data;

/* ==========================
   HAMBURGER MENU LOGIC
========================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ==========================
   ACTIVE + FOCUS CURRENT LINK
========================== */

const navLinks = document.querySelectorAll("#nav-menu a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
    link.setAttribute("tabindex", "0");
    link.focus();
  }
});
