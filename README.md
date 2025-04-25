# Password-Validation function
## Overview
This project contains a JavaScript function that validates a password based on specific criteria. The function checks if the password adheres to the following rules:
- It must contain at least one uppercase letter.
- It must contain at least one lowercase letter.
- It must contain at least one number.
- It must be at least 8 characters long.
  
The function returns `true` if the password is valid and `false` if it does not meet the criteria.

## Function

### `password(str)`

This function takes a string as input (the password) and returns a boolean value (`true` or `false`) based on the validation criteria.

#### Parameters:
- `str` (string): The password string to be validated.

#### Returns:
- `true` if the password meets the criteria.
- `false` if the password does not meet the criteria.

## Example Usage

```javascript
console.log(password("Abcd1234")); // true
console.log(password("Abcd123"));  // false
console.log(password("abcd1234")); // false
console.log(password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,")); // true
console.log(password("ABCD1234")); // false
