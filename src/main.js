document.querySelector('#app').innerHTML = `
  <h1>LAST WARNING!</h1>
  <div id="countdown" style="font-size: 2rem; margin-top: 20px;"></div>
  <img src="/my-image.jpg" alt="My Image" width="400">
`;

const countdownEl = document.getElementById('countdown');

// Target date in UTC
const targetDate = new Date('2025-05-25T18:59:00Z');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.innerText = '🎉 Time’s up!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run once immediately
