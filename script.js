// script.js
const loginContainer = document.querySelector('.login-container');
const infoContainer = document.querySelector('.info-container');
const passcodeInput = document.getElementById('passcode');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
  if (passcodeInput.value === 'ceremony') {
    loginContainer.style.opacity = 0;
    setTimeout(() => {
      loginContainer.style.display = 'none';
      infoContainer.style.display = 'block';
      setTimeout(() => {
        infoContainer.style.opacity = 1;
      }, 50);
    }, 500);
  } else {
    alert('Incorrect passcode. Please try again.');
  }
});

// Weather widget (you'll need to replace this with an actual weather API)
const weatherWidget = document.getElementById('weather-widget');
weatherWidget.innerHTML = '<p>Sunny, 75°F</p>';