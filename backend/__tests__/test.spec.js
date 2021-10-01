const request = require("supertest")("http://localhost:5000/api/v1");
const expect = require("chai").expect;

describe("GET /recipes", function () {
  it("is the API is functional", async function () {
    const response = await request.get("/recipes?CleanedIngredients=coconut");

    expect(response.status).to.eql(200);
  });
});