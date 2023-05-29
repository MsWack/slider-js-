// window.addEventListener("load") - скрипт начнет выполняться только после того, как загрузится все страница
// window.addEventListener("DOMContentLoaded") - весь HTML полностью загружен (то есть загружена вся структура html - дерево), не дожидаясь окончания загрузки стилей, изображений и фреймов

// весь скрипт будет прописываться внутри "DOMContentLoaded"
window.addEventListener("DOMContentLoaded", () => {
    // СЛАЙДЕР

    // получаем слайд, который показывается в текущий момент
    let slideIndex = 1;
    // получаем сами слайды
    const slides = document.querySelectorAll(".slider-item");
    // получаем стрелочки навигации
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    // получаем точки навигации (их обертку и сами точки)
    const dotsWrap = document.querySelector(".slider-dots");
    const dots = document.querySelectorAll(".dot");

    // функция для отображения слайдов (в качестве аргумента будет передаваться slideIndex)
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

        // для каждого слайда ставим стиль display = "none", чтобы потом поставить display = "block" для определенного слайда
        slides.forEach((item) => (item.style.display = "none"));
        // удаляем со всех точек класс активности, чтобы потом поставить для его определенной точки
        dots.forEach((item) => item.classList.remove("dot-active"));

        // выставляем display = "block" для определенного слайда (то есть для того слайда, который мы хотим показывать первым)
        slides[slideIndex - 1].style.display = "block";
        // добавляем класс активности для определенной точки, соответствующей нужному слайду
        dots[slideIndex - 1].classList.add("dot-active");
    }

    showSlides(slideIndex);

    // функция для изменения slideIndex в зависимости от нажатия на стрелочку (вперед, назад). В качестве рагумента выставляем отрицательное или положительное число для стрелочки назад и вперед соответственно, в зависимости от того, на какое количество слайдов надо передвинуться (например, если мы выставим -2 или 2, то передвинемя на два слайда назад или вперед соотвественно).
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    // функция для определения текущего слайда в зависимости от нажатия на точку. В качестве рагумента -
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    // при нажатии на стрелочку назад отнимаем у slideIndex 1, таким образом индекс слайда становится на единицу меньше и мы передвигаемся на один слайд назад
    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    // при нажатии на стрелочку назад прибавляем к slideIndex 1, таким образом индекс слайда становится на единицу больше и мы передвигаемся на один слайд вперед
    next.addEventListener("click", () => {
        plusSlides(1);
    });

    // при нажатии на точку ..
    dotsWrap.addEventListener("click", (event) => {
        // выставляем i < dots.length + 1 для того, чтобы перебрать все элементы в dotsWrap (то есть выражение i < dots.length + 1 равносильно выражению i <= dots.length)
        for (let i = 0; i < dots.length + 1; i++) {
            // ..если мы нажали на элемент с классом "dot" и его индекс равен i - 1.. Использование dots[i - 1] в условии позволяет нам сравнить элемент, на который было произведено нажатие (event.target), с элементом массива dots, соответствующим "реальному" индексу слайда. Если "реальный" индекс слайда равен 1, то условие dots[i - 1] вычислит индекс для массива dots в JavaScript. При i = 1, получим dots[1 - 1], что равно dots[0]. Таким образом, мы получим элемент массива dots с индексом 0.
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                // запускаем функцию currentSlide именно для того слайда, на который нажали
                currentSlide(i);
            }
        }
    });
});
