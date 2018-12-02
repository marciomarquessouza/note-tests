const app = require("../server").app;
const request = require("supertest");
const expect = require("expect");

describe('Server Tests', function() {
  describe('HTTP calls', () => {
    it("If return 404, should return the right message", (done) => {
      request(app)
        .get("/")
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page not found",
            name: "New App v1.0",
          });
        })
        .end(done)
    });
  });
  describe("Test users", () => {
    it("It should return status 200", (done) => {
      request(app)
        .get("/users")
        .expect(200)
        .end(done)
    });
    it("It should find out a user in users array", (done) => {
      request(app)
        .get("/users")
        .expect((res) => {
          expect(res.body).toInclude({
            name: "Marcio Marques de Souza",
            age: 35,
          });
        })
        .end(done)
    });
  });
});
