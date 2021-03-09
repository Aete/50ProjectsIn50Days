const boxes = document.querySelectorAll('.box');

const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}, options);

boxes.forEach((box) => {
  observer.observe(box);
});
