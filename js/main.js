const carouselImages = document.getElementsByClassName('carouselImage');
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

let activeIndex = 0;

upButton.addEventListener('click',
    function() {
        carouselImages[activeIndex].classList.remove("active");
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = carouselImages.length - 1;
        }
        carouselImages[activeIndex].classList.add("active");
    }
);

downButton.addEventListener('click',
    function() {
        carouselImages[activeIndex].classList.remove("active");
        activeIndex++;
        if (activeIndex >= carouselImages.length) {
            activeIndex = 0;
        }
        carouselImages[activeIndex].classList.add("active");
    }
);