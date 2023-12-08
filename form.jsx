// your_script.js

function validateForm() {
    // Get form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validation using regular expressions
    if (!isValidUsername(username)) {
        displayErrorMessage('Invalid username. It must contain only letters and numbers.');
        return;
    }

    if (!isValidEmail(email)) {
        displayErrorMessage('Invalid email address.');
        return;
    }

    if (!isValidPassword(password)) {
        displayErrorMessage('Invalid password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    // If all validations pass, you can submit the form or perform other actions
    // For now, let's display a success message
    displaySuccessMessage('Form submitted successfully!');
}

function isValidUsername(username) {
    // Username should contain only letters and numbers
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
}

function isValidEmail(email) {
    // Simple email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

function displayErrorMessage(message) {
    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
}

function displaySuccessMessage(message) {
    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.style.color = 'green';
    errorMessageElement.textContent = message;
}
