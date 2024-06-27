document.addEventListener("DOMContentLoaded", function () {
   const carousel = document.querySelector(".carousel");
   const slides = carousel.querySelector(".slides");
   const prevButton = document.querySelector(".prev");
   const nextButton = document.querySelector(".next");
   const counter = document.querySelector(".counter");

   const slideWidth = carousel.querySelector(".slide").offsetWidth;
   let currentIndex = 0;
   const totalSlides = slides.children.length;

   function updateCounter() {
      counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
   }

   function goToSlide(index) {
      currentIndex = Math.min(Math.max(index, 0), totalSlides - 1);
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateCounter();
      updateButtonState();
   }

   function nextSlide() {
      if (currentIndex < totalSlides - 1) {
         goToSlide(currentIndex + 1);
      }
   }

   function prevSlide() {
      if (currentIndex > 0) {
         goToSlide(currentIndex - 1);
      }
   }

   function updateButtonState() {
      if (currentIndex === 0) {
         prevButton.disabled = true;
      } else {
         prevButton.disabled = false;
      }

      if (currentIndex === totalSlides - 1) {
         nextButton.disabled = true;
      } else {
         nextButton.disabled = false;
      }
   }

   nextButton.addEventListener("click", nextSlide);
   prevButton.addEventListener("click", prevSlide);

   updateCounter();
   updateButtonState();
});
