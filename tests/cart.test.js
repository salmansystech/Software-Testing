const Cart = require("../src/cart");

describe("Cart", () => {
  it("should add items to the cart", () => {
    const cart = new Cart();
    cart.addItem({ id: 1, name: "Apple", price: 2 });
    expect(cart.items.length).toBe(1);
  });

  it("should remove items from the cart", () => {
    const cart = new Cart();
    cart.addItem({ id: 1, name: "Apple", price: 2 });
    cart.removeItem(1);
    expect(cart.items.length).toBe(0);
  });

  it("should calculate total price", () => {
    const cart = new Cart();
    cart.addItem({ id: 1, name: "Apple", price: 2 });
    cart.addItem({ id: 2, name: "Banana", price: 3 });
    expect(cart.calculateTotal()).toBe(5);
  });
});
