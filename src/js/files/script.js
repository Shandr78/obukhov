// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


//====================================================================================================
// Text change slider start
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-text li');
const slideCount = slides.length;

function showSlide() {
  // Скрываем все элементы li
  for (let i = 0; i < slideCount; i++) {
    slides[i].classList.remove('active');
  }
  // Показываем следующий элемент li
  slides[slideIndex].classList.add('active');
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
showSlide();

// Text change slider end
//====================================================================================================