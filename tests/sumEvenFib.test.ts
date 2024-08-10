import { sumEvenFib } from "../sumEvenFib";

describe("Sum of Even-valued Fibonacci Series", () => {
   describe("Less than 10", () => {
	  let n: number;
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 n = 10;
	  });
	  describe("Summed", () => {
		 test.todo(`Should be equal to the sum, ${sum}.`);
	  });
   });
   describe("Less than 4 million", () => {
	  let n: number;
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 n = 4000000;
	  });
	  describe("Summed", () => {
		 test.todo(`Should be equal to the sum, ${sum}.`);
	  });
   });
});
