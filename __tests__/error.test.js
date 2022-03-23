"use strict";

const supertest = require("supertest");
const { server } = require("../src/server");
const request = supertest(server);


describe("handler will throw error 404 when triggered", () => {
    test("error404 should return error status 404 (invalid route)", async () => {
      let response = await request.get('/notinserver')
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
    test("error404 should return status 200", async () => {
      let response = await request.get('/person?name=tom')

      expect(response.status).toBe(200);
    });
    test("error404 should return the object with name and query", async () => {
      let response = await request.get('/person?name=tom')
      expect(response.body).toEqual({ name: 'tom' });
    });
});
