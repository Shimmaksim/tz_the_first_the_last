import './styles.css';
import mouse from './mouse';
import Swiper from 'swiper';

mouse();

function parallax(event) {
  this.querySelectorAll('.photo').forEach(photo => {
    photo.style.transform = `translateX(${event.clientX / 10}px)`;
  });
}
document.addEventListener('mousemove', parallax);

const btn = document.querySelector('.btn');
const list = document.querySelector('.logo__list');

btn.addEventListener('click', e => {
  list.classList.toggle('block');
});

// const slider = new Swiper('.slider', {
//   speed: 800,
//   effect: 'slide',
//   slidesPerGroup: 3,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loopFillGroupWithBlank: true,
// });

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 9,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
// })
