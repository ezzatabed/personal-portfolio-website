const player = document.getElementById('player');
const ground = document.getElementById('ground');
let jumping = false;

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !jumping) {
    jump();
  }
});

function jump() {
  jumping = true;
  let jumpHeight = 0;

  const jumpInterval = setInterval(() => {
    jumpHeight += 5;
    player.style.bottom = jumpHeight + 'px';

    if (jumpHeight >= 100) {
      clearInterval(jumpInterval);
      fall();
    }
  }, 20);
}

function fall() {
  const fallInterval = setInterval(() => {
    const currentBottom = parseInt(player.style.bottom);
    if (currentBottom > 0) {
      player.style.bottom = (currentBottom - 5) + 'px';
    } else {
      clearInterval(fallInterval);
      jumping = false;
    }
  }, 20);
}
