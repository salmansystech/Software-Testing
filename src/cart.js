class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

module.exports = Cart;
