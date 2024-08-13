import { largestPrimeFactor } from "../largestPrimeFactor";

describe("The Largest Prime Factor", () => {
   describe("of 48", () => {
	  let n: number;
	  let maxFactor: number;
	  let value: number;
	  beforeAll(() => {
		 n = 48;
		 maxFactor = 3;
		 value = largestPrimeFactor(n);
	  });
	  describe("Factored", () => {
		 test(`Should be equal to the value, ${maxFactor}.`, () => {
			expect(value).toBe(maxFactor)
		 });
	  });
   });
   describe("of 600851475143", () => {
	  let n: number;
	  let maxFactor: number;
	  let value: number;
	  beforeAll(() => {
		 n = 600851475143;
		 maxFactor = 6857;
		 value = largestPrimeFactor(n);
	  });
	  describe("Factored", () => {
		 test(`Should be equal to the value, ${maxFactor}.`, () => {
			expect(value).toBe(maxFactor)
		 });
	  });
   });
});
