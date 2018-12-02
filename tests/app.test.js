const expect = require('expect');
const rewire = require('rewire');

const app = rewire('../spies/app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy(),
  };
  app.__set__('db', db);
  it("It should call the spie correctly", () => {
    const spy = expect.createSpy();
    spy("Marcio Marques de Souza", 35);
    expect(spy).toHaveBeenCalledWith("Marcio Marques de Souza", 35);
  });
  it("It should call saveUser with the created object", () => {
    const email = "marcio@gmail.com";
    const password = "123abc";
    app.handleUser(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  })
});
