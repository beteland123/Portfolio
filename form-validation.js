document.getElementById('contact-form').addEventListener('submit', (event) => {
  const mail = document.getElementById('mail');
  const email = mail.value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.error').innerHTML = ' please change email adress to lowercase';
  }
});
