 // JavaScript to hide the loader after the page loads
 window.onload = function () {
    document.getElementById('loader').style.display = 'none';
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  