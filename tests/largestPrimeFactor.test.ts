import { largestPrimeFactor } from "../largestPrimeFactor";

describe("The Largest Prime Factor", () => {
   describe("of 48", () => {
	  let n: number;
	  let value: number;
	  beforeAll(() => {
		 n = 48;
		 value = largestPrimeFactor(n);
	  });
	  describe("Factored", () => {
		 test.todo(`Should be equal to the value, ${value}.`);
	  });
   });
   describe("of 600851475143", () => {
	  let n: number;
	  let value: number;
	  beforeAll(() => {
		 n = 600851475143;
		 value = largestPrimeFactor(n);
	  });
	  describe("Factored", () => {
		 test.todo(`Should be equal to the value, ${value}.`);
	  });
   });
});
