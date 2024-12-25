// randomGenerators.js

// Generate random numbers in different ranges
function getRandomNumber(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}

// Generate random segments of a French telephone number
function getRandomFrenchPhoneNumber() {
    const segment1 = "06"; // Start with 06 or 07
    const segment2 = getRandomNumber(10, 99).toString();
    const segment3 = getRandomNumber(10, 99).toString();
    const segment4 = getRandomNumber(10, 99).toString();
    const segment5 = getRandomNumber(10, 99).toString();

    return `${segment1} ${segment2} ${segment3} ${segment4} ${segment5}`;
}

// Generate random email
function getRandomEmail() {
    const randomNumber = getRandomNumber(10000, 99999);
    return `test.email${randomNumber}@yopmail.com`;
}

// Generate random pseudonym
function getRandomPseudonym() {
    const randomNumber = getRandomNumber(10000, 99999);
    return `pseudonyme${randomNumber}`;
}

// Exporting functions for reuse in Postman
module.exports = {
    getRandomNumber,
    getRandomFrenchPhoneNumber,
    getRandomEmail,
    getRandomPseudonym,
};
