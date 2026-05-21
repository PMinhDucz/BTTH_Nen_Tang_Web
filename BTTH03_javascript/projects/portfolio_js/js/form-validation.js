const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const successMessage = document.getElementById('successMessage');
const submitBtn = document.getElementById('submitBtn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(input, isValid, errorMsg) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message');
    if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        errorDiv.textContent = errorMsg;
        errorDiv.style.display = 'block';
    }
    return isValid;
}

messageInput.addEventListener('input', () => {
    const len = messageInput.value.length;
    charCount.textContent = len;
    if (len >= 50) {
        charCount.style.color = 'green';
    } else {
        charCount.style.color = 'gray';
    }
});

[nameInput, subjectInput].forEach(input => {
    input.addEventListener('blur', () => validateField(input, input.value.trim() !== '', 'This field is required'));
});

emailInput.addEventListener('blur', () => {
    validateField(emailInput, emailRegex.test(emailInput.value), 'Please enter a valid email address');
});

messageInput.addEventListener('blur', () => {
    validateField(messageInput, messageInput.value.length >= 50, 'Message must be at least 50 characters');
});
