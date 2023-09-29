document.addEventListener("DOMContentLoaded", function () {
  var text =
    "My goal is to make a meaningful impact on users' lives through thoughtful and user-centered design.";
  var delay = 10; // Скорость печати
  var startDelay = 1000; // Задержка старта анимации в миллисекундах (10 секунд)

  var elem = document.getElementById("result");

  // Функция для проверки, виден ли элемент на странице
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < window.innerWidth &&
      rect.top < window.innerHeight
    );
  }

  var printText = function (text, elem, delay) {
    if (text.length > 0) {
      elem.innerHTML += text[0];
      setTimeout(function () {
        printText(text.slice(1), elem, delay);
      }, delay);
    }
  };

  var section3 = document.getElementById("phrase");

  // Функция, которая начнет анимацию, когда элемент будет видим
  var startAnimationIfVisible = function () {
    if (isElementInViewport(section3)) {
      // Удаление обработчика события, чтобы анимация началась только один раз
      window.removeEventListener("scroll", startAnimationIfVisible);

      // Запуск анимации с задержкой
      setTimeout(function () {
        printText(text, elem, delay);
      }, startDelay);
    }
  };

  // Слушаем событие прокрутки
  window.addEventListener("scroll", startAnimationIfVisible);
});
