// script.js

// Example: Toggle search bar focus
document.querySelector('.search-bar input').addEventListener('focus', function() {
    this.style.borderColor = 'orange';
});

document.querySelector('.search-bar input').addEventListener('blur', function() {
    this.style.borderColor = '#ddd';
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const quantityNumber = document.querySelector('.quantity-number');
  const addToCartBtn = document.getElementById('add-to-cart');
  const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout');

  let quantity = 0;

  decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      updateQuantity();
    }
  });

  increaseBtn.addEventListener('click', () => {
    quantity++;
    updateQuantity();
  });

  addToCartBtn.addEventListener('click', () => {
    addToCartBtn.style.display = 'none';
    proceedToCheckoutBtn.style.display = 'block';
  });

  function updateQuantity() {
    quantityNumber.textContent = quantity;
    addToCartBtn.disabled = quantity === 0;
  }
});
