const Formatter = require("../src/formatter");

describe("Formatter", () => {
  it("should format currency correctly", () => {
    const formatter = new Formatter();
    expect(formatter.formatCurrency(10)).toBe("$10.00");
  });
});
