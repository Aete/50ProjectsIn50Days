const $sliderContainer = document.querySelector('.slider-container');
const $rightSlide = document.querySelector('.right-slide');
const $leftSlide = document.querySelector('.left-slide');
const $upButton = document.querySelector('.up-button');
const $downButton = document.querySelector('.down-button');
const slideLength = $rightSlide.querySelectorAll('div').length;

let activeSlideIdx = 0;

$leftSlide.style.top = `-${(slideLength - 1) * 100}%`;

$upButton.addEventListener('click', () => changeSlide('up'));
$downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = $sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIdx++;
    if (activeSlideIdx > slideLength - 1) {
      activeSlideIdx = 0;
    }
  } else if (direction === 'down') {
    activeSlideIdx--;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slideLength - 1;
    }
  }
  $rightSlide.style.transform = `translateY(-${
    activeSlideIdx * sliderHeight
  }px)`;
  $leftSlide.style.transform = `translateY(+${
    activeSlideIdx * sliderHeight
  }px)`;
};
