import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('Math Utils', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 5)).to.equal(7);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 4)).to.equal(1);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(5, 3)).to.equal(15);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(9, 3)).to.equal(3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(1, 0)).to.throw('Cannot divide by zero');
    });
  });
});
