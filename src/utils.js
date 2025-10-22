// src/utils.js
function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}

module.exports = { currentAgeForBirthYear };
