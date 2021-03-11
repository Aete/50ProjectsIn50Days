const $insert = document.getElementById('insert');

window.addEventListener('keyup', (e) => {
  $insert.innerHTML = `
  <div class="key">
    ${e.key === ' ' ? "' ' (space)" : e.key}
    <span class="comment">event.key</span>
    </div>
  <div class="key">
    ${e.keyCode}
    <span class="comment">event.keyCode</span>
  </div>
  <div class="key">
    ${e.code}
    <span class="comment">event.code</span>
  </div>`;
});
