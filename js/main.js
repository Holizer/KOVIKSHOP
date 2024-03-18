let popupBg = document.querySelector('.pop_up');
let popup = document.querySelector('.pop_up_container');
let openPopupButtons = document.querySelectorAll('.open_pop_up');
let closePopupButton = document.querySelector('.pop_up_close');
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        popupBg.classList.remove("active")
        popup.classList.remove("active")
    }
})
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove("active")
        popup.classList.remove('active');
    }
});

let swiper_1 = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
    keyboard: true,
});

let swiper_2 = new Swiper(".reviews_swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 700,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    keyboard: true,
});

$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
	});
});


document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("signupForm");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Пароли не совпадают");
      } 
      else {
        form.submit();
      }
    });
});

document.addEventListener('click', function(event) {
  let target = event.target;
  if (target.classList.contains('password-control')) {
    let passwordInputs;
    
    if (target.closest('#signinForm')) {
      passwordInputs = target.closest('#signinForm').querySelectorAll('.input-password');
    } else
    if (target.closest('#signupForm')) {
      passwordInputs = target.closest('#signupForm').querySelectorAll('.input-password');
    }
    passwordInputs.forEach(function(passwordInput) {
      if (passwordInput.getAttribute('type') === 'password') {
        target.classList.add('view');
        passwordInput.setAttribute('type', 'text');
      } else {
        target.classList.remove('view');
        passwordInput.setAttribute('type', 'password');
      }
    });
  }
});