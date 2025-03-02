document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".slider-img");
  let currentIndex = 0;

  function changeImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds
});

//hero section animation
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(changeSlide, 5000); // Change image every 5 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".characteristics li");
  let index = 0;

  function fadeInItems() {
    listItems.forEach((li) => {
      li.style.opacity = "0";
      li.style.transform = "translateY(20px)";
    });

    function showItem() {
      if (index < listItems.length) {
        listItems[index].style.opacity = "1";
        listItems[index].style.transform = "translateY(0)";
        index++;
        setTimeout(showItem, 500); // Delay between each item appearing
      } else {
        setTimeout(() => {
          index = 0;
          fadeInItems(); // Reset animation after showing all items
          setTimeout(fadeInItems, 5000); // Pause for 5 seconds before repeating
        }, 5000);
      }
    }

    showItem();
  }

  fadeInItems(); // Start animation
});
