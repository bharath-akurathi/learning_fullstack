// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasMinLength && hasUppercase && hasLowercase && hasDigit;
}

// Example usage:
console.log(isValidPassword("Password123")); // true
console.log(isValidPassword("pass")); // false
console.log(isValidPassword("PASSWORD123")); // false
console.log(isValidPassword("Password")); // false