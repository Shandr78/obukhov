// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


//====================================================================================================
// Text change slider start

// if (window.location.href.indexOf('home.html') > -1) {
//   // Запустить код только на странице home.html
//   // ...
// }
// if (window.location.pathname === '/home.html') {
//   // Запустить код только на странице home.html
//   // ...
// }

let slideIndex = 0;
const slides = document.querySelectorAll(".slider-text li");
const slideCount = slides.length;

function showSlide() {
  // Скрываем все элементы li
  for (let i = 0; i < slideCount; i++) {
    slides[i].classList.remove("active");
  }
  // Показываем следующий элемент li
  slides[slideIndex].classList.add("active");
  // Увеличиваем индекс на 1
  slideIndex++;
  // Если дошли до последнего элемента, переходим на первый
  if (slideIndex === slideCount) {
    slideIndex = 0;
  }
  // Задержка перед показом следующего элемента
  setTimeout(showSlide, 4000);
}

// Начинаем показ слайдов
if (slideCount > 0) {
  showSlide();
}

// Text change slider end
//====================================================================================================