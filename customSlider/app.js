const $range = document.querySelector('#range');

$range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const $label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle($range).getPropertyValue('width');
  const labelWidth = getComputedStyle($label).getPropertyValue('width');
  $label.innerHTML = value;

  const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  const { max, min } = $range;
  const left =
    (value * numWidth) / (max - min) -
    numLabelWidth / 2 +
    scale(value, min, max, 10, -10);

  $label.style.left = `${left}px`;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
