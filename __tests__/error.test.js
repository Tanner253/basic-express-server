"use strict";

const supertest = require("supertest");
const { server } = require("../src/server");
const request = supertest(server);


describe("handler will throw error 404 when triggered", () => {
    test("error404 should return error status 404 (invalid route)", async () => {
      let response = await request.get('/routeDoesntExist')
      expect(response.status).toBe(404);
    });

    test("error404 should return error status 404 (ivalid method)", async () => {
      let response = await request.post('/person')
      expect(response.status).toBe(404);
    });

    test("error500 should return error status 500 when no query name sent", async () => {
      let response = await request.get('/person')
      expect(response.status).toBe(500);
    });

    test("should return status 200 for successful get request", async () => {
      let response = await request.get('/person?name=tom')
      expect(response.status).toBe(200);
    });

    test("get request should return 200/appropriate object ", async () => {
      let response = await request.get('/person?name=tom')
      expect(response.body).toEqual({ name: 'tom' });
    });
});
