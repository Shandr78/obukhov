/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay  } from "swiper";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".atention__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".atention__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1.55,
      spaceBetween: 5,
      autoHeight: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      //   autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      //   },

      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      // preloadImages: false,
      // lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".atention__slider-btn-prev",
        nextEl: ".atention__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        640: {
          slidesPerView: 1.55,
          spaceBetween: 3,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        1268: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        1440: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        // 1600: {
        // slidesPerView:1.73,
        // spaceBetween: 5,
        // },
        // 1920: {
        // slidesPerView: 2.08,
        // spaceBetween: 5,
        // },
        // 2560: {
        // slidesPerView: 2.76,
        // spaceBetween: 10,
        // },
        // 3840: {
        // slidesPerView: 3.8,
        // spaceBetween: 30,
        // },
        // 4096: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }
  if (document.querySelector(".apartment__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".apartment__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 31,
      autoHeight: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      //   autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      //   },

      // touchRatio: 0,
      // simulateTouch: false,
      // loop: true,
      // preloadImages: false,
      // lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".apartment__slider-btn-prev",
        nextEl: ".apartment__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoHeight: true,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoHeight: true,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 25,
          autoHeight: true,
        },
        // 1440: {
        // 	slidesPerView: 3,
        // 	spaceBetween: 5,
        //   },
        // 1600: {
        // slidesPerView:1.73,
        // spaceBetween: 5,
        // },
        // 1920: {
        // slidesPerView: 2.08,
        // spaceBetween: 5,
        // },
        // 2560: {
        // slidesPerView: 2.76,
        // spaceBetween: 10,
        // },
        // 3840: {
        // slidesPerView: 3.8,
        // spaceBetween: 30,
        // },
        // 4096: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".benefits__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".benefits__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1.55,
      spaceBetween: 5,
      autoHeight: true,
      speed: 800,
      watchOverflow: true,
      effect: "slide",
      //   autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      //   },

      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      // preloadImages: false,
      // lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".benefits__slider-btn-prev",
        nextEl: ".benefits__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        640: {
          slidesPerView: 1.55,
          spaceBetween: 3,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.55,
          spaceBetween: 5,
          autoHeight: true,
        },
        992: {
          slidesPerView: 1.55,
          spaceBetween: 5,
          autoHeight: true,
        },
        1268: {
          slidesPerView: 1.55,
          spaceBetween: 5,
          autoHeight: true,
        },
        // 1440: {
        // 	slidesPerView: 3,
        // 	spaceBetween: 5,
        //   },
        // 1600: {
        // slidesPerView:1.73,
        // spaceBetween: 5,
        // },
        // 1920: {
        // slidesPerView: 2.08,
        // spaceBetween: 5,
        // },
        // 2560: {
        // slidesPerView: 2.76,
        // spaceBetween: 10,
        // },
        // 3840: {
        // slidesPerView: 3.8,
        // spaceBetween: 30,
        // },
        // 4096: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }
  if (document.querySelector(".news__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".news__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 31,
      autoHeight: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      //   autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      //   },

      // touchRatio: 0,
      // simulateTouch: false,
      // loop: true,
      // preloadImages: false,
      // lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".news__slider-btn-prev",
        nextEl: ".news__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoHeight: true,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoHeight: true,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 25,
          autoHeight: true,
        },
        // 1440: {
        // 	slidesPerView: 3,
        // 	spaceBetween: 5,
        //   },
        // 1600: {
        // slidesPerView:1.73,
        // spaceBetween: 5,
        // },
        // 1920: {
        // slidesPerView: 2.08,
        // spaceBetween: 5,
        // },
        // 2560: {
        // slidesPerView: 2.76,
        // spaceBetween: 10,
        // },
        // 3840: {
        // slidesPerView: 3.8,
        // spaceBetween: 30,
        // },
        // 4096: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".interest__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".interest__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1.55,
      spaceBetween: 5,
      autoHeight: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      //   autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      //   },

      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      // preloadImages: false,
      // lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".interest__slider-btn-prev",
        nextEl: ".interest__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        640: {
          slidesPerView: 1.55,
          spaceBetween: 3,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        1268: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        1440: {
          slidesPerView: 1.55,
          spaceBetween: 5,
        },
        // 1600: {
        // slidesPerView:1.73,
        // spaceBetween: 5,
        // },
        // 1920: {
        // slidesPerView: 2.08,
        // spaceBetween: 5,
        // },
        // 2560: {
        // slidesPerView: 2.76,
        // spaceBetween: 10,
        // },
        // 3840: {
        // slidesPerView: 3.8,
        // spaceBetween: 30,
        // },
        // 4096: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
