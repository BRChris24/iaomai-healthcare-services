// ==============accordion script================== 
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;

      // Close all others
      headers.forEach(h => {
        if (h !== header) {
          h.classList.remove("active");
          h.nextElementSibling.style.maxHeight = null;
          h.nextElementSibling.classList.remove("open");
        }
      });

      // Toggle current
      header.classList.toggle("active");

      if (body.style.maxHeight) {
        body.style.maxHeight = null;
        body.classList.remove("open");
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        body.classList.add("open");
      }
    });
  });
// =====================end of accordion script==================