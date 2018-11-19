const expect = require('expect');
const utils = require('../utils/utils.js');

describe('Add function tests', () => {

  it('should return 4 when the valures are 2,2', () => {
    const res = utils.add(2,2);
    expect(res).toBe(4);
  });
  it('must be a number',() => {
    const res = utils.add(2,2);
    expect(res).toBeA('number');
  });
  it("Both numbers must be sent", () => {
    const res = utils.add(2);
    expect(res).toBe("both values must be sent");
  });
  it("Null values must return a error message", () => {
    const res = utils.add();
    expect(res).toBe("both values must be sent");
  });
})
