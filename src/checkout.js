class Checkout {
  constructor(cart, apiHandler) {
    this.cart = cart;
    this.apiHandler = apiHandler;
  }

  processPayment(paymentDetails) {
    if (!paymentDetails.cardNumber) {
      throw new Error("Invalid payment details");
    }
    return this.apiHandler.makePayment(
      this.cart.calculateTotal(),
      paymentDetails
    );
  }
}

module.exports = Checkout;
