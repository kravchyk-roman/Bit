"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var notification = function notification() {
  var showBtn = document.querySelectorAll('.show-notification');
  var notifications = document.querySelectorAll('.notification');
  showBtn.forEach(function (e) {
    e.addEventListener('click', function () {
      notifications.forEach(function (e) {
        e.classList.add('active');
      });
    });
  });
};

var select = function select() {
  var current = document.querySelectorAll('.select__current');
  current.forEach(function (e) {
    e.addEventListener('click', function () {
      e.closest('.select').classList.toggle('active');
    });
  });
};



var faq = function faq() {
  var current = document.querySelectorAll('.faq__header-btn');
  current.forEach(function (e) {
    e.addEventListener('click', function () {
      e.closest('.faq').classList.toggle('active');
    });
  });
};

var Slider = /*#__PURE__*/function () {
  function Slider(rangeElements) {
    var _this = this;

    _classCallCheck(this, Slider);

    this.rangeElements = rangeElements; // Attach a listener to "change" event

    this.rangeElements.forEach(function (e) {
      e.addEventListener('input', _this.updateSlider.bind(_this));
    });
  } // Initialize the slider


  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.updateSlider();
    }
  }, {
    key: "generateBackground",
    value: function generateBackground(value, min, max) {
      var percentage = (value - min) / (max - min) * 100;
      return "linear-gradient(to right, #00da83, #00da83 ".concat(percentage, "%, #E6E8EC ").concat(percentage, "%, #E6E8EC 100%)");
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(newValue) {
      var _this2 = this;

      this.rangeElements.forEach(function (e) {
        e.style.background = _this2.generateBackground(e.value, e.min, e.max);
      });
    }
  }]);

  return Slider;
}();

var rangeElements = document.querySelectorAll('.range-slider__range');

if (rangeElements) {
  var slider = new Slider(rangeElements);
  slider.init();
}

var sandwich = function sandwich() {
  var openBtn = document.querySelector('.sandwich__open-btn');
  var closeBtn = document.querySelector('.sandwich__close-btn');
  var wrapper = document.querySelector('.sandwich__main');
  var menu = document.querySelector('.sandwich__content');
  openBtn.addEventListener('click', function () {
    wrapper.classList.add('sandwich__main--active');
    menu.classList.add('sandwich__content--active');
  });
  closeBtn.addEventListener('click', function () {
    wrapper.classList.remove('sandwich__main--active');
    menu.classList.remove('sandwich__content--active');
  });
  wrapper.addEventListener('click', function (e) {
    if (e.target.dataset.sandwich === 'wrapper') {
      wrapper.classList.remove('sandwich__main--active');
      menu.classList.remove('sandwich__content--active');
    }
  });
};

(function () {
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia('(min-width: 769px)'); // keep track of swiper instances to destroy later

  var mySwiper;

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return sliderAdvantages();
    }
  };

  if (window.innerWidth <= 320 && mySwiper) {
    mySwiper.destroy(false);
  }

  var sliderAdvantages = function sliderAdvantages() {
    mySwiper = new Swiper('.stats-panel__container', {
      spaceBetween: 16,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        420: {
          slidesPerView: 2
        },
        660: {
          slidesPerView: 3
        }
      }
    });
  }; // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})();

var marketMobile = function marketMobile() {
  var btn = document.querySelectorAll('.market-nav-mobile__btn');
  var tradeBlock = document.querySelector('.trade-form-box');
  var wrapper = document.querySelector('.market-trade-outer');
  btn.forEach(function (el) {
    el.addEventListener('click', function () {
      tradeBlock.classList.add('trade-form-box--opened');
      wrapper.classList.add('market-trade-outer--active');
    });
  });
  wrapper.addEventListener('click', function () {
    tradeBlock.classList.remove('trade-form-box--opened');
    wrapper.classList.remove('market-trade-outer--active');
  });
};

var tableDropdownRows = function tableDropdownRows() {
  var btn = document.querySelectorAll('.td--dropdown');
  btn.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      evt.currentTarget.classList.toggle('td--dropdown-active');
      evt.currentTarget.closest('.tr').querySelectorAll('.td--full').forEach(function (elInner) {
        elInner.classList.toggle('td--full-active');
      });
    });
  });
};

sandwich();
notification();
select();
faq();
marketMobile();
tableDropdownRows();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uIiwic2hvd0J0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm5vdGlmaWNhdGlvbnMiLCJmb3JFYWNoIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3QiLCJjdXJyZW50IiwiY2xvc2VzdCIsInRvZ2dsZSIsImZhcSIsIlNsaWRlciIsInJhbmdlRWxlbWVudHMiLCJ1cGRhdGVTbGlkZXIiLCJiaW5kIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJwZXJjZW50YWdlIiwibmV3VmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJnZW5lcmF0ZUJhY2tncm91bmQiLCJzbGlkZXIiLCJpbml0Iiwic2FuZHdpY2giLCJvcGVuQnRuIiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnRuIiwid3JhcHBlciIsIm1lbnUiLCJyZW1vdmUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYnJlYWtwb2ludCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJteVN3aXBlciIsImJyZWFrcG9pbnRDaGVja2VyIiwibWF0Y2hlcyIsInVuZGVmaW5lZCIsImRlc3Ryb3kiLCJzbGlkZXJBZHZhbnRhZ2VzIiwiaW5uZXJXaWR0aCIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJzbGlkZXNQZXJWaWV3IiwiYnJlYWtwb2ludHMiLCJhZGRMaXN0ZW5lciIsIm1hcmtldE1vYmlsZSIsImJ0biIsInRyYWRlQmxvY2siLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixvQkFBMUIsQ0FBaEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBdEI7QUFFQUYsRUFBQUEsT0FBTyxDQUFDSSxPQUFSLENB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QUEwQix5QkFBMUIsQ0FBWjtBQUNBLE1BQU1xRCxVQUFVLEdBQUd0RCxRQUFRLENBQUM2QixhQUFULENBQXVCLGlCQUF2QixDQUFuQjtBQUNBLE1BQU1FLE9BQU8sR0FBRy9CLFFBQVEsQ0FBQzZCLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCO0FBRUF3QixFQUFBQSxHQUFHLENBQUNsRCxPQUFKLENBQVksVUFBQ29ELEVBQUQsRUFBUTtBQUNuQkEsSUFBQUEsRUFBRSxDQUFDbEQsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNsQ2lELE1BQUFBLFVBQVUsQ0FBQ2hELFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLHdCQUF6QjtBQUNBd0IsTUFBQUEsT0FBTyxDQUFDekIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsNEJBQXRCO0FBQ0EsS0FIRDtBQUlBLEdBTEQ7QUFNQXdCLEVBQUFBLE9BQU8sQ0FBQzFCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdkNpRCxJQUFBQSxVQUFVLENBQUNoRCxTQUFYLENBQXFCMkIsTUFBckIsQ0FBNEIsd0JBQTVCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ3pCLFNBQVIsQ0FBa0IyQixNQUFsQixDQUF5Qiw0QkFBekI7QUFDQSxHQUhEO0FBSUEsQ0FmRDs7QUFpQkFOLFFBQVE7QUFDUjdCLFlBQVk7QUFDWlUsTUFBTTtBQUNOSSxHQUFHO0FBQ0h3QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm90aWZpY2F0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBzaG93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctbm90aWZpY2F0aW9uJyk7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90aWZpY2F0aW9uJyk7XG5cblx0c2hvd0J0bi5mb3JFYWNoKChlKSA9PiB7XG5cdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdG5vdGlmaWNhdGlvbnMuZm9yRWFjaCgoZSkgPT4ge1xuXHRcdFx0XHRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuY29uc3Qgc2VsZWN0ID0gKCkgPT4ge1xuXHRjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fY3VycmVudCcpO1xuXHRjdXJyZW50LmZvckVhY2goKGUpID0+IHtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZS5jbG9zZXN0KCcuc2VsZWN0JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuY29uc3QgZmFxID0gKCkgPT4ge1xuXHRjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faGVhZGVyLWJ0bicpO1xuXHRjdXJyZW50LmZvckVhY2goKGUpID0+IHtcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZS5jbG9zZXN0KCcuZmFxJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuY2xhc3MgU2xpZGVyIHtcblx0Y29uc3RydWN0b3IocmFuZ2VFbGVtZW50cykge1xuXHRcdHRoaXMucmFuZ2VFbGVtZW50cyA9IHJhbmdlRWxlbWVudHM7XG5cblx0XHQvLyBBdHRhY2ggYSBsaXN0ZW5lciB0byBcImNoYW5nZVwiIGV2ZW50XG5cdFx0dGhpcy5yYW5nZUVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcblx0XHRcdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVNsaWRlci5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgdGhlIHNsaWRlclxuXHRpbml0KCkge1xuXHRcdHRoaXMudXBkYXRlU2xpZGVyKClcblx0fVxuXG5cdGdlbmVyYXRlQmFja2dyb3VuZCh2YWx1ZSwgbWluLCBtYXgpIHtcblx0XHRjb25zdCBwZXJjZW50YWdlID0gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pICogMTAwO1xuXHRcdHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBkYTgzLCAjMDBkYTgzICR7cGVyY2VudGFnZX0lLCAjRTZFOEVDICR7cGVyY2VudGFnZX0lLCAjRTZFOEVDIDEwMCUpYFxuXHR9XG5cblx0dXBkYXRlU2xpZGVyKG5ld1ZhbHVlKSB7XG5cdFx0dGhpcy5yYW5nZUVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcblx0XHRcdGUuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuZ2VuZXJhdGVCYWNrZ3JvdW5kKGUudmFsdWUsIGUubWluLCBlLm1heCk7XG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCByYW5nZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLXNsaWRlcl9fcmFuZ2UnKTtcblxuaWYgKHJhbmdlRWxlbWVudHMpIHtcblx0Y29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcihyYW5nZUVsZW1lbnRzKVxuXG5cdHNsaWRlci5pbml0KClcbn1cblxuY29uc3Qgc2FuZHdpY2ggPSAoKSA9PiB7XG5cdGNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FuZHdpY2hfX29wZW4tYnRuJyk7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbmR3aWNoX19jbG9zZS1idG4nKTtcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW5kd2ljaF9fbWFpbicpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbmR3aWNoX19jb250ZW50Jyk7XG5cblx0b3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NhbmR3aWNoX19tYWluLS1hY3RpdmUnKTtcblx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ3NhbmR3aWNoX19jb250ZW50LS1hY3RpdmUnKTtcblx0fSk7XG5cblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzYW5kd2ljaF9fbWFpbi0tYWN0aXZlJyk7XG5cdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzYW5kd2ljaF9fY29udGVudC0tYWN0aXZlJyk7XG5cdH0pO1xuXG5cdHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LnNhbmR3aWNoID09PSAnd3JhcHBlcicpIHtcblx0XHRcdHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2FuZHdpY2hfX21haW4tLWFjdGl2ZScpO1xuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzYW5kd2ljaF9fY29udGVudC0tYWN0aXZlJyk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG5cdC8vIGJyZWFrcG9pbnQgd2hlcmUgc3dpcGVyIHdpbGwgYmUgZGVzdHJveWVkXG5cdC8vIGFuZCBzd2l0Y2hlcyB0byBhIGR1YWwtY29sdW1uIGxheW91dFxuXHRjb25zdCBicmVha3BvaW50ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpO1xuXHQvLyBrZWVwIHRyYWNrIG9mIHN3aXBlciBpbnN0YW5jZXMgdG8gZGVzdHJveSBsYXRlclxuXHRsZXQgbXlTd2lwZXI7XG5cdGNvbnN0IGJyZWFrcG9pbnRDaGVja2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGlmIGxhcmdlciB2aWV3cG9ydCBhbmQgbXVsdGktcm93IGxheW91dCBuZWVkZWRcblx0XHRpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSB0cnVlKSB7XG5cdFx0XHQvLyBjbGVhbiB1cCBvbGQgaW5zdGFuY2VzIGFuZCBpbmxpbmUgc3R5bGVzIHdoZW4gYXZhaWxhYmxlXG5cdFx0XHRpZiAobXlTd2lwZXIgIT09IHVuZGVmaW5lZCkgbXlTd2lwZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcblx0XHRcdC8vIG9yL2FuZCBkbyBub3RoaW5nXG5cblx0XHRcdC8vIGVsc2UgaWYgYSBzbWFsbCB2aWV3cG9ydCBhbmQgc2luZ2xlIGNvbHVtbiBsYXlvdXQgbmVlZGVkXG5cdFx0fSBlbHNlIGlmIChicmVha3BvaW50Lm1hdGNoZXMgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyBmaXJlIHNtYWxsIHZpZXdwb3J0IHZlcnNpb24gb2Ygc3dpcGVyXG5cdFx0XHRyZXR1cm4gc2xpZGVyQWR2YW50YWdlcygpO1xuXHRcdH1cblx0fTtcblxuXHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gMzIwICYmIG15U3dpcGVyKSB7XG5cdFx0bXlTd2lwZXIuZGVzdHJveShmYWxzZSlcblx0fVxuXG5cdGNvbnN0IHNsaWRlckFkdmFudGFnZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3RhdHMtcGFuZWxfX2NvbnRhaW5lcicsIHtcblx0XHRcdHNwYWNlQmV0d2VlbjogMTYsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdGJyZWFrcG9pbnRzOiB7XG5cdFx0XHRcdDQyMDoge1xuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0NjYwOiB7XG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cdC8vIGtlZXAgYW4gZXllIG9uIHZpZXdwb3J0IHNpemUgY2hhbmdlc1xuXHRicmVha3BvaW50LmFkZExpc3RlbmVyKGJyZWFrcG9pbnRDaGVja2VyKTtcblx0Ly8ga2lja3N0YXJ0XG5cdGJyZWFrcG9pbnRDaGVja2VyKCk7XG59KCkpO1xuXG5jb25zdCBtYXJrZXRNb2JpbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXJrZXQtbmF2LW1vYmlsZV9fYnRuJyk7XG5cdGNvbnN0IHRyYWRlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhZGUtZm9ybS1ib3gnKTtcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXJrZXQtdHJhZGUtb3V0ZXInKTtcblxuXHRidG4uZm9yRWFjaCgoZWwpID0+IHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRyYWRlQmxvY2suY2xhc3NMaXN0LmFkZCgndHJhZGUtZm9ybS1ib3gtLW9wZW5lZCcpO1xuXHRcdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYXJrZXQtdHJhZGUtb3V0ZXItLWFjdGl2ZScpO1xuXHRcdH0pXG5cdH0pO1xuXHR3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHRyYWRlQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgndHJhZGUtZm9ybS1ib3gtLW9wZW5lZCcpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWFya2V0LXRyYWRlLW91dGVyLS1hY3RpdmUnKTtcblx0fSk7XG59O1xuXG5zYW5kd2ljaCgpO1xubm90aWZpY2F0aW9uKCk7XG5zZWxlY3QoKTtcbmZhcSgpO1xubWFya2V0TW9iaWxlKCk7XG4iXSwiZmlsZSI6Im1haW4ubWluLmpzIn0=
