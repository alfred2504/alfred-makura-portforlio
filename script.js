// script.js

document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
    } else {
      alert('Please enter a valid email address.');
    }
  });  