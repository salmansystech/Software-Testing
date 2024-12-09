const Search = require("../src/search");

describe("Search", () => {
  const products = [
    { id: 1, name: "Apple", category: "Fruits", price: 2 },
    { id: 2, name: "Broccoli", category: "Vegetables", price: 3 },
  ];

  it("should filter products by category", () => {
    const search = new Search(products);
    expect(search.filterByCategory("Fruits").length).toBe(1);
  });

  it("should filter products by price range", () => {
    const search = new Search(products);
    expect(search.filterByPriceRange(2, 3).length).toBe(2);
  });
});
