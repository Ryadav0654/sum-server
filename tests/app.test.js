const request = require("supertest");
const app = require("../src/app");


describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});

describe("Test the sum path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/sum").query({'a': 10, 'b': 15});
        console.log("res: ", response.text)
        expect(response.text).toBe("{\"message\":\"Sum is calculated!\",\"sum\":\"25\"}");
    });
});
