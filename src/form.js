const scriptURL = 'https://script.google.com/macros/s/AKfycbzmcK611I9VXjmprPgzK96b8DwmfAQLYHrRsw6W7xXwMV9GmtEJg-zSSxQPsXRcQeae8Q/exec';
const form = document.forms['submit-to-google-sheet'];
const successAlert = document.getElementById('successAlert');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            showSuccessAlert();
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

function showSuccessAlert() {
    successAlert.style.display = 'block';
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 3000); // Hide the alert after 3 seconds
}