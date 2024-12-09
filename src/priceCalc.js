class PriceCalc {
  calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
  }
}

module.exports = PriceCalc;
