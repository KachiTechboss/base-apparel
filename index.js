document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('email-form');
    const emailInput = form.querySelector('.input-m');
    const errorMessage = form.querySelector('.error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            showError('The input field is empty.');
        } else if (!isValidEmail(emailValue)) {
            showError('The email address is not formatted correctly.');
        } else {
            errorMessage.style.display = 'none';
            // Handle successful form submission (e.g., send data to server)
            console.log('Form submitted successfully with email:', emailValue);
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});