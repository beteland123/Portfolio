window.onload = function () {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form inputs
    document.getElementById('form-field').addEventListener('input', () => {
      // Get the value of the form types
      const formName = document.getElementById('name').value;
      const formEmail = document.getElementById('mail').value;
      const msg = document.getElementById('txtarea').value;

      const data = {
        storedName: formName,
        storedEmail: formEmail,
        storedMsg: msg,
      };
        // Save the object in localStorage.
      localStorage.setItem('formData', JSON.stringify(data));
    });
  }
};
function getData() {
  // Retrieve the form data
  const parseData = JSON.parse(localStorage.getItem('formData'));
  if (parseData !== 'undefined' || parseData !== 'null') {
    document.getElementById('name').value = parseData.storedName;
    document.getElementById('email').value = parseData.storedEmail;
    document.getElementById('msg').value = parseData.storedEmail;
  }
}
getData();