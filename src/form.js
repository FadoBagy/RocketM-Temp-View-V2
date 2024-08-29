const form = document.forms['submit-to-google-sheet'];
const successAlert = document.getElementById('successAlert');

form.addEventListener('submit', e => {
    e.preventDefault();
});

function showSuccessAlert() {
    successAlert.style.display = 'block';
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 3000); // Hide the alert after 3 seconds
}