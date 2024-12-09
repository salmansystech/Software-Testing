const ApiHandler = require("../src/apiHandler");

describe("ApiHandler", () => {
  it("should make payment successfully", async () => {
    const api = new ApiHandler();
    const result = await api.makePayment(10, { cardNumber: "1234-5678" });
    expect(result.status).toBe("success");
  });
});
