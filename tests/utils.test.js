const expect = require('expect');
const utils = require('../utils/utils.js');
describe('Util Tests', function() {
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
    it("should return the sum of two number async", () => {
      utils.asyncAdd(2, 2, (sum) => {
        expect(sum).toBe(4).toBeA('number');
      });
    });
    it("should return the sum ot two variables", (done) => {
      utils.sumParts(1,7, (sum) => {
        expect(sum).toBe(8).toBeA('number');
        done();
      });
    });
  });
  describe('Async functions',() => {
    it("should return the first and last name", (done) => {
      utils.names("Marcio Souza", (name) => {
        expect(name.firstName).toBe('Marcio');
        expect(name.lastName).toBe('Souza');
        done();
      });
    });
  });
});
