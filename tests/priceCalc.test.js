const PriceCalc = require("../src/priceCalc");

describe("PriceCalc", () => {
  it("should calculate total price", () => {
    const calc = new PriceCalc();
    const items = [
      { id: 1, price: 10 },
      { id: 2, price: 20 },
    ];
    expect(calc.calculateTotal(items)).toBe(30);
  });
});
