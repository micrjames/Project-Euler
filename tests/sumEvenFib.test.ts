import { sumEvenFib } from "../sumEvenFib";
import { getEvenFibs } from "../utils/getEvenFibs";

describe("Sum of Even-valued Fibonacci Series", () => {
   describe("Less than 10", () => {
	  let n: number;
	  let maxValue: number;
	  let evenFibsSum: number;
	  let sum: number;
	  beforeAll(() => {
		 n = 10;
		 maxValue = 40;
		 evenFibsSum = getEvenFibs(n).reduce((acc, curr) => acc + curr);
		 sum = sumEvenFib(maxValue);
	  });
	  describe("Summed", () => {
		 test(`Should be equal to the sum, ${sum}.`, () => {
			expect(sum).toBe(evenFibsSum);
		 });
	  });
   });
   describe("Less than 4 million", () => {
	  let n: number;
	  let maxValue: number;
	  let evenFibsSum: number;
	  let sum: number;
	  beforeAll(() => {
		 n = 3500000;
		 maxValue = 4000000;
		 evenFibsSum = getEvenFibs(n).reduce((acc, curr) => acc + curr);
		 sum = sumEvenFib(maxValue);
	  });
	  describe("Summed", () => {
		 test(`Should be equal to the sum, ${sum}.`, () => {
			expect(sum).toBe(evenFibsSum);
		 });
	  });
   });
});
