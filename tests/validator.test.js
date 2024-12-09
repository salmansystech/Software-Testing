const Validator = require("../src/validator");

describe("Validator", () => {
  it("should validate email addresses correctly", () => {
    const validator = new Validator();
    expect(validator.isValidEmail("test@example.com")).toBe(true);
    expect(validator.isValidEmail("invalid-email")).toBe(false);
  });
});
