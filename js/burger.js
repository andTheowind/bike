const burger = document.querySelector('.catalog-btn.burger.btn-reset');
const popUp = document.querySelector('.catalog-wrap');

burger.addEventListener('click', () => {

  const popUpStyle = window.getComputedStyle(popUp);

  if (popUpStyle.display === 'none') {

    popUp.style.display = 'block';

  } else {

    popUp.style.display = 'none';
 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burgerMob").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});