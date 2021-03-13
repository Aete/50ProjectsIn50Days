const $counters = document.querySelectorAll('.counter span');

$counters.forEach((counter) => {
  counter.textContent = '0';
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const c = +counter.textContent;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(() => {
        updateCounter();
      }, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
