class Search {
  constructor(products) {
    this.products = products;
  }

  filterByCategory(category) {
    return this.products.filter((product) => product.category === category);
  }

  filterByPriceRange(min, max) {
    return this.products.filter(
      (product) => product.price >= min && product.price <= max
    );
  }
}

module.exports = Search;
