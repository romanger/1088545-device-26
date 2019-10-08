// Featured slider

var slider = document.querySelector('.slider');
var buttons = slider.querySelectorAll('.slider-controls button');

function sliderClearActiveStateAll() {
  var slides = slider.querySelectorAll('.slider-item');

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    buttons[i].classList.remove('active');
  }
}

function sliderInit() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      e.preventDefault();

      if(!this.classList.contains('active')){
      var index = this.textContent;
      var slideClass = '.item-' + index;

      sliderClearActiveStateAll();
      this.classList.add('active');
      slider.querySelector(slideClass).classList.add('active');
      }
    });
  }
}

sliderInit();


// Services tabs

var services = document.querySelector('.services');
var tabs = services.querySelectorAll('.service-tabs a');

function tabsClearActiveStateAll() {
  var tabsContent = services.querySelectorAll('.single-service');
  for (var i = 0; i < tabs.length; i++) {
    tabsContent[i].classList.remove('active');
    tabs[i].classList.remove('active');
  }
}

function tabInit() {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
      e.preventDefault();

      if (!this.classList.contains('active')) {
        var tabIndex = this.getAttribute('data-index');
        var tabClass = '.tab-' + tabIndex;

        tabsClearActiveStateAll();
        this.classList.add('active');
        services.querySelector(tabClass).classList.add('active');
      }
    });
  }
}

tabInit();

// Modal Window Map

var openMap = document.querySelector('.open-map');
var modalMap = document.querySelector('.modal-map');
var closeMap = modalMap.querySelector('.close');

openMap.addEventListener('click', function (e) {
  e.preventDefault();
  modalMap.classList.add('active');
});

closeMap.addEventListener('click', function (e) {
  e.preventDefault();
  modalMap.classList.remove('active');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (modalMap.classList.contains("active")) {
      modalMap.classList.remove('active');
      modalMap.classList.remove('invalid');
    }
  }
});


// Modal Window Contact Us

var openContact = document.querySelector('.open-contact-us');
var modalContact = document.querySelector('.modal-contact');
var closeContact = modalContact.querySelector('.close');

openContact.addEventListener('click', function (e) {
  e.preventDefault();
  modalContact.classList.add('active');
  modalContact.querySelector('.input-name').focus();
});

closeContact.addEventListener('click', function (e) {
  e.preventDefault();
  modalContact.classList.remove('active');
  modalContact.classList.remove('invalid');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalContact.classList.contains("active")) {
      modalContact.classList.remove('active');
      modalContact.classList.remove('invalid');
    }
  }
});

//Contact us validation 

var contactForm = modalContact.querySelector('form');

var inputName = contactForm.querySelector('.input-name');
var inputEmail = contactForm.querySelector('.input-email');

contactForm.addEventListener('submit', function (e) {
  if (!inputName.value || !inputEmail.value) {
    e.preventDefault();
    modalContact.classList.add('invalid');
  }
});
