'use strict';

;(function () {
  const toggle = document.querySelectorAll('.js-nav-main-toggle');

  toggle.forEach(function (el) {
    el.addEventListener('click', function () {
      const header = document.querySelector('#header');

      header.classList.toggle('is-nav-opened');
    });
  });
})();
