function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3500);
}

showSlides();
