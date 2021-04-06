window.addEventListener('DOMContentLoaded', () => {
  const $hour = document.querySelector('.hour');
  const $minute = document.querySelector('.minute');
  const $second = document.querySelector('.second');

  const $time = document.querySelector('.time');
  const $date = document.querySelector('.date');
  const $toggle = document.querySelector('.toggle');

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  $toggle.addEventListener('click', (event) => {
    const $html = document.querySelector('html');
    if ($html.classList.contains('dark')) {
      $html.classList.remove('dark');
      event.target.textContent = 'Dark mode';
    } else {
      $html.classList.add('dark');
      event.target.textContent = 'Light mode';
    }
  });

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    $hour.style.transform = `rotate(${
      hoursForClock * 30 + minutes * 0.5 + (seconds * 0.5) / 60
    }deg)`;

    $minute.style.transform = `rotate(${minutes * 6 + (seconds * 6) / 60}deg)`;
    $second.style.transform = `rotate(${seconds * 6}deg)`;

    $time.innerHTML = `${hoursForClock}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${hours > 12 ? 'PM' : 'AM'}`;

    $date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  }

  setInterval(() => setTime(), 1000);
  setTime();
  document.querySelector('html').style.opacity = 1;
});
