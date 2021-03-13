const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map((char, index) => {
      return `<span style="transition-delay: ${index * 30}ms">${char}</span>`;
    })
    .join('');
});
