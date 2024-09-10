// JavaScript for Countdown Timer
const countdown = () => {
  const countDate = new Date("Dec 31, 2024 00:00:00").getTime(); // Target date
  const now = new Date().getTime();
  const gap = countDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate time left
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Update the HTML with the time
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (gap < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '<h2>The website is live!</h2>';
  }
};

// Update countdown every second
const countdownInterval = setInterval(countdown, 1000);

// Notify form (simple example)
document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thank you! You will be notified at: ${email}`);
    document.getElementById('email').value = ''; // Clear input
  }
});
