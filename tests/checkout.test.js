const Checkout = require("../src/checkout");
const Cart = require("../src/cart");
const ApiHandler = require("../src/apiHandler");

jest.mock("../src/apiHandler");

describe("Checkout", () => {
  it("should process payment with valid details", async () => {
    const cart = new Cart();
    const apiHandler = new ApiHandler();
    apiHandler.makePayment = jest.fn().mockResolvedValue({ status: "success" });

    cart.addItem({ id: 1, name: "Apple", price: 2 });
    const checkout = new Checkout(cart, apiHandler);

    const result = await checkout.processPayment({ cardNumber: "1234-5678" });
    expect(result.status).toBe("success");
  });
});
