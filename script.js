document.addEventListener("DOMContentLoaded", function () {
   const carousel = document.querySelector(".carousel");
   const slides = carousel.querySelector(".slides");
   const prevButton = document.querySelector(".prev");
   const nextButton = document.querySelector(".next");
   const counter = document.querySelector(".counter");
   const pagination = document.querySelector(".carousel-pagination");

   const slideWidth = carousel.querySelector(".slide").offsetWidth;
   let currentIndex = 0;
   const totalSlides = slides.children.length;

   const track = document.querySelector(".carousel-track");
   const slide0 = document.querySelector(".grid-1");
   const slides2 = Array.from(track.children);
   const nextButton2 = document.querySelector(".carousel-button.next2");
   const prevButton2 = document.querySelector(".carousel-button.prev2");
   prevButton2.disabled = true;
   const slideWidth2 = slide0.getBoundingClientRect().width + 50; //slides2[0].getBoundingClientRect().width;

   let currentSlide = 0;

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

   function updateButtonState2() {
      if (currentSlide === 0) {
         prevButton2.disabled = true;
      } else {
         prevButton2.disabled = false;
      }
      if (currentSlide === 4) {
         nextButton2.disabled = true;
      } else {
         nextButton2.disabled = false;
      }
   }

   [0, 1, 2, 3, 4].forEach((slide, index) => {
      const button = document.createElement("button");
      if (index === 0) button.classList.add("active");
      button.addEventListener("click", () => {
         currentSlide = index;
         updateCarousel();
      });
      pagination.appendChild(button);
   });

   const updateCarousel = () => {
      track.style.transform =
         "translateX(-" + slideWidth2 * currentSlide + "px)";
      document
         .querySelectorAll(".carousel-pagination button")
         .forEach((button, index) => {
            button.classList.toggle("active", index === currentSlide);
         });
      updateButtonState2();
   };

   nextButton2.addEventListener("click", () => {
      if (currentSlide < 4) {
         currentSlide++;
         updateCarousel();
      }
   });

   prevButton2.addEventListener("click", () => {
      if (currentSlide > 0) {
         currentSlide--;
         updateCarousel();
      }
   });
});
