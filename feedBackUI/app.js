const $ratings = document.querySelectorAll('.rating');
const $sendBtn = document.querySelector('#send');
const $panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

$panel.addEventListener('click', (e) => {
  const { target } = e;
  if (target.tagName === 'BUTTON') {
    $panel.innerHTML = `
        <i class='fas fa-heart'></i>
        <strong>Thank you!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use your feedback to improve our customer support</p>
    `;
    return;
  } else if (target.classList.contains('rating')) {
    $ratings.forEach(($rating) => {
      if ($rating === target) {
        $rating.classList.add('active');
        selectedRating = $rating.querySelector('small').textContent;
      } else {
        $rating.classList.remove('active');
      }
    });
    return;
  }
});
