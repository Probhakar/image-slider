const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

document.getElementById("next").addEventListener("click", function () {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
});

document.getElementById("prev").addEventListener("click", function () {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("active");
});