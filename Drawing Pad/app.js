const $canvas = document.querySelector('.canvas');
const $increaseBtn = document.querySelector('#increase');
const $decreaseBtn = document.querySelector('#decrease');
const $sizeSpan = document.querySelector('#size');
const $clearBtn = document.querySelector('#clear');
const $colorInput = document.querySelector('#color');
const ctx = $canvas.getContext('2d');

const increaseSize = 'INCREASE_SIZE';
const decreaseSize = 'DECREASE_SIZE';

const changeColor = 'CHANGE_COLOR';

let state = {
  size: 15,
  isPress: false,
  color: 'black',
  x: undefined,
  y: undefined,
};

function dispatch(state, action) {
  switch (action.type) {
    case increaseSize:
      return { ...state, size: state.size < 50 ? state.size + 1 : state.size };
    case decreaseSize:
      return { ...state, size: state.size > 1 ? state.size - 1 : state.size };
    case changeColor:
      return { ...state, color: action.color };
  }
}

$canvas.addEventListener('mousedown', (e) => {
  state.isPress = true;
  state.x = e.offsetX;
  state.y = e.offsetY;
});

$canvas.addEventListener('mouseup', (e) => {
  state.isPress = false;
  state.x = undefined;
  state.y = undefined;
});

$canvas.addEventListener('mousemove', (e) => {
  if (state.isPress) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(state.x, state.y, x2, y2);

    state.x = x2;
    state.y = y2;
  }

  state.x = e.offsetX;
  state.y = e.offsetY;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, state.size, 0, Math.PI * 2, true);
  ctx.fillStyle = state.color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = state.color;
  ctx.lineWidth = state.size * 2;
  ctx.stroke();
}

$colorInput.addEventListener('change', (e) => {
  state = dispatch(state, { type: changeColor, color: e.target.value });
});

$increaseBtn.addEventListener('click', (e) => {
  state = dispatch(state, { type: increaseSize });
  $sizeSpan.textContent = state.size;
});

$decreaseBtn.addEventListener('click', (e) => {
  state = dispatch(state, { type: decreaseSize });
  $sizeSpan.textContent = state.size;
});

$clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, 800, 800));
