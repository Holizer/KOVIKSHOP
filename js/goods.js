function handleButtonClick(event, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  const button = event.currentTarget;
  const buttonText = button.textContent;

  targetElement.textContent = buttonText;
}

const btnSizes = document.querySelectorAll(".btn_size");
btnSizes.forEach(function (button) {
  button.addEventListener('click', function (event) {
    handleButtonClick(event, "size_inf");
  });
});

const btnColors = document.querySelectorAll(".btn_color");
btnColors.forEach(function (button) {
  button.addEventListener('click', function (event) {
    handleButtonClick(event, "color_inf");
  });
});

let swiper = new Swiper(".goods_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
    },
    keyboard: true,
    touchpad: true,
});

let goods_swiper = document.getElementById('goods_swiper');
let arrows = goods_swiper.querySelectorAll('.arrow');
arrows.forEach(arrow => {
  arrow.classList.add("disable");
});
goods_swiper.addEventListener("mouseover", function() {
  arrows.forEach(arrow => {
    arrow.classList.add("active");
  });
});
goods_swiper.addEventListener("mouseout", function() {
  arrows.forEach(arrow => {
    arrow.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
  
      const topOffset = 50; 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
  
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

const vb_btn = document.getElementsByClassName("vb_img");
const size_btn = document.getElementsByClassName("btn_size");
const color_btn = document.getElementsByClassName("btn_color");
function addBorder(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
      } else {
        resetBorder(buttons);
        this.classList.add("clicked");
      }
    });
  }
}
function resetBorder(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
}
addBorder(vb_btn);
addBorder(size_btn);
addBorder(color_btn);

function switchToSlide(slideIndex) {
  swiper.slideTo(slideIndex);
}

const mainPhoto = document.querySelectorAll('.main_photo');
const btnColorButtons = document.querySelectorAll('.btn_color');
function changeColorImage(event) {
  var mainPhotoElements = document.querySelectorAll('.main_photo');
  var srcArray = [];
  mainPhotoElements.forEach(function(photoElement) {
    srcArray.push(photoElement.src);
  });

  const btnColor = event.currentTarget;
  const btnColorBackground = getComputedStyle(btnColor).backgroundImage;
  const imageUrl = btnColorBackground.match(/url\("?(.+?)"?\)/)[1];
  
  const slideIndex = Array.from(srcArray).indexOf(imageUrl);

  switchToSlide(slideIndex);
}
btnColorButtons.forEach(button => {
  button.addEventListener('click', changeColorImage);
});

const verticalButtons = document.querySelectorAll('.vb_img');
function changeVbImage(event) {
  var mainPhotoElements = document.querySelectorAll('.main_photo');
  var srcArray = [];

  mainPhotoElements.forEach(function(photoElement) {
    srcArray.push(photoElement.src);
  });
  console.log(srcArray)

  const btnColor = event.currentTarget;
  const imageUrl = btnColor.src;
  
  const slideIndex = Array.from(srcArray).indexOf(imageUrl);

  switchToSlide(slideIndex);
}
verticalButtons.forEach(button => {
  button.addEventListener('click', changeVbImage);
});

const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const descriptionObjects = document.querySelectorAll('.description_img');

const maxVisibleObjects = 2;

let visibleObjectCount = 0;

descriptionObjects.forEach(function (object, index) {
  if (index >= maxVisibleObjects) {
    object.style.display = 'none';
  } else {
    visibleObjectCount++;
  }

});

showButton.addEventListener('click', function () {
    for (let i = visibleObjectCount; i < visibleObjectCount + maxVisibleObjects; i++) {
        if (descriptionObjects[i]) {
            descriptionObjects[i].style.display = 'flex';
        }
    }

    visibleObjectCount += maxVisibleObjects;
  

    if (visibleObjectCount >= descriptionObjects.length) {
        showButton.style.display = 'none';
        hideButton.style.display = 'flex';
    }
});

hideButton.addEventListener('click', function () {
    for (let i = visibleObjectCount - 1; i >= visibleObjectCount - maxVisibleObjects; i--) {
        if (descriptionObjects[i]) {
            descriptionObjects[i].style.display = 'none';
        }
    }

    visibleObjectCount -= maxVisibleObjects;

    if (visibleObjectCount <= maxVisibleObjects) {
        showButton.style.display = 'flex';
        hideButton.style.display = 'none';
    }
});