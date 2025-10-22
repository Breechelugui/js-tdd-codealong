// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the correct age based on year of birth", () => {
    const birthYear = 2000;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toBe(expectedAge);
  });
});
