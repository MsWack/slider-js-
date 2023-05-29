window.addEventListener("DOMContentLoaded", () => {
    // СЛАЙДЕР

    // получаем слайд, который показывается в текущий момент
    let slideIndex = 1;
    // получаем сами слайды
    const slides = document.querySelectorAll(".slider-item");
    // получаем стрелочки навигации
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    // получаем точки навигации
    const dotsWrap = document.querySelector(".slider-dots");
    const dots = document.querySelectorAll(".dot");

    // функция для отображения слайдов
    function showSlides(n) {
        // если слайды закончились..
        if (n > slides.length) {
            // .. возвращаемся к самому первому слайду
            slideIndex = 1;
        }

        // если листаем назад..
        if (n < 1) {
            // .. то переходим к самому последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => (item.style.display = "none"));
        dots.forEach((item) => item.classList.remove("dot-active"));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    showSlides(slideIndex);

    // функция для изменения slideIndex в зависимости от нажатия на стрелочку (вперед, назад).
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    // функция для определения текущего слайда в зависимости от нажатия на точку.
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    
    next.addEventListener("click", () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
});
