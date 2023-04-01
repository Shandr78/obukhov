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

// // Создаем новый XMLHttpRequest объект
// const xhr = new XMLHttpRequest();

// // Назначаем обработчик события, который будет вызван при изменении состояния запроса
// xhr.onreadystatechange = function() {
//   // Проверяем состояние запроса, чтобы убедиться, что он завершен
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     // Проверяем статус ответа, чтобы убедиться, что запрос был успешным
//     if (xhr.status === 200) {
//       // Распарсиваем JSON из ответа и сохраняем список файлов в переменную files
//       const files = JSON.parse(xhr.responseText);
//       // Выводим список файлов в консоль
//       console.log(files);
//     } else {
//       // Выводим сообщение об ошибке в консоль, если запрос был неуспешным
//       console.error("Error getting images:", xhr.status);
//     }
//   }
// };

// // Открываем соединение с сервером с помощью метода open()
// // Первый параметр - метод запроса, в данном случае GET
// // Второй параметр - URL-адрес запроса, в данном случае /get_images.php
// xhr.open('GET', '/get_images.php');

// // Отправляем запрос на сервер с помощью метода send()
// xhr.send();

