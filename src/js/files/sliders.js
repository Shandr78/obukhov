/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay } from "swiper";
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
      // slidesPerView: 1.55,
      spaceBetween: 5,
      autoHeight: true,
      loop: true,
      speed: 1000,
      grabCursor: true,
      watchOverflow: true,
      effect: "fade",
      // autoplay: {
      //   delay: 6000,
      //   disableOnInteraction: 1,
      // },
      navigation: {
        prevEl: ".atention__slider-btn-prev",
        nextEl: ".atention__slider-btn-next",
      },

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
      // navigation: {
      //   prevEl: ".atention__slider-btn-prev",
      //   nextEl: ".atention__slider-btn-next",
      // },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 1,
        },
        882: {
          slidesPerView: 1.55,
        },
        992: {
          slidesPerView: 1.55,
        },
        1268: {
          slidesPerView: 1.55,
        },
        1440: {
          slidesPerView: 1.55,
        },
        1600: {
          slidesPerView: 1.55,
        },
        1920: {
          slidesPerView: 1.55,
        },
        2560: {
          slidesPerView: 1.55,
        },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".apartments__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".apartments__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,
      spaceBetween: 31,
      autoHeight: true,
      grabCursor: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      // autoplay: {
      //   delay: 6000,
      //   disableOnInteraction: false,
      // },

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
        prevEl: ".apartments__slider-btn-prev",
        nextEl: ".apartments__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 2,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 3,
        },
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
      spaceBetween: 5,
      autoHeight: true,
      grabCursor: true,
      speed: 800,
      watchOverflow: true,
      effect: "slide",
      // autoplay: {
      //   delay: 12000,
      //   disableOnInteraction: false,
      // },

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
        552: {
          slidesPerView: 1,
        },
        882: {
          slidesPerView: 1.55,
        },
        992: {
          slidesPerView: 1.55,
        },
        1268: {
          slidesPerView: 1.55,
        },
        1440: {
          slidesPerView: 1.55,
        },
        1600: {
          slidesPerView: 1.55,
        },
        1920: {
          slidesPerView: 1.55,
        },
        2560: {
          slidesPerView: 1.55,
        },
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
      slidesPerGroup: 1,
      spaceBetween: 31,
      autoHeight: true,
      grabCursor: true,
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
        552: {
          slidesPerView: 2,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 3,
        },
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
      spaceBetween: 5,
      autoHeight: true,
      grabCursor: true,
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
        552: {
          slidesPerView: 1,
        },
        882: {
          slidesPerView: 1.55,
        },
        992: {
          slidesPerView: 1.55,
        },
        1268: {
          slidesPerView: 1.55,
        },
        1440: {
          slidesPerView: 1.55,
        },
        1600: {
          slidesPerView: 1.55,
        },
        1920: {
          slidesPerView: 1.55,
        },
        2560: {
          slidesPerView: 1.55,
        },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".company-atention__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".company-atention__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      spaceBetween: 5,
      autoHeight: true,
      grabCursor: true,
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
        prevEl: ".company-atention__slider-btn-prev",
        nextEl: ".company-atention__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 1,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 4,
        },
        
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".company-atention__slider-title")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".company-atention__slider-title", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      spaceBetween: 5,
      autoHeight: true,
      grabCursor: true,
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
        prevEl: ".company-atention__slider-btn-prev",
        nextEl: ".company-atention__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 1,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 4,
        },
        3840: {
          slidesPerView: 4,
        },
        4096: {
          slidesPerView: 6,
        },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".company-social__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".company-social__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,
      spaceBetween: 38,
      autoHeight: true,
      grabCursor: true,
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
        prevEl: ".company-social__slider-btn-prev",
        nextEl: ".company-social__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 2,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 3,
        },
      },

      // Події
      on: {},
    });
  }

  if (document.querySelector(".documentation__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".documentation__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,
      spaceBetween: 31,
      autoHeight: true,
      grabCursor: true,
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
        prevEl: ".documentation__slider-btn-prev",
        nextEl: ".documentation__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        552: {
          slidesPerView: 2,
        },
        882: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
        2560: {
          slidesPerView: 3,
        },
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

  if (document.querySelector(".news-page__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".news-page__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      autoHeight: true,
      grabCursor: true,
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
        prevEl: ".news-page__slider-btn-prev",
        nextEl: ".news-page__slider-btn-next",
      },

      // Брейкпоінти
      breakpoints: {
        // 640: {
        //   slidesPerView: 1,
        // },
        // 768: {
        //   slidesPerView: 1,
        // },
        // 992: {
        //   slidesPerView: 1,
        //   spaceBetween: 0,
        //   autoHeight: true,
        // },
        // 1268: {
        //   slidesPerView: 1,
        // },
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
