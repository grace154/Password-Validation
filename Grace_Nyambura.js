function password(str) {
    const hasUpperCase = /[A-Z]/.test(str);
    const hasLowerCase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const isLongEnough = str.length >= 8;

    return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
}


console.log(password("Abcd1234"));// true
console.log(password("Abcd123")); // false
console.log(password("abcd1234")); // false
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); // true
console.log(password("ABCD1234")); false
console.log(password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,")); // true
console.log(password("!@#$%^&*()-_+={}[]|\\:;?/>.<,")); //false
