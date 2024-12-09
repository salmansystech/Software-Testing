class ApiHandler {
  async makePayment(amount, paymentDetails) {
    // Simulate API call
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    return { status: "success", transactionId: "12345" };
  }
}

module.exports = ApiHandler;
