const data = `
  <img src="./assets/icons/iaomai_logo_-rvm.png" class="icons-l" alt="">
            <nav>
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



// Select all nav links
const navLinks = document.querySelectorAll("nav ul li a");

// Get current page filename (e.g., "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Loop through each link
navLinks.forEach(link => {
  // Compare href value with current page
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
