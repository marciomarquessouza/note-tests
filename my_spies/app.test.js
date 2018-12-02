const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe('App', () => {
  const db = {
    createUser: expect.createSpy();
  };
  app.__set__("db", deb);
  it("It should create a user with the sent object", () => {
    const email = "marcio@gmail.com";
    const password = "123abc";
    app.handleUser(email, password);
    expect(db.createUser).toHaveBeenCalledWith(email, password);
  });
});
