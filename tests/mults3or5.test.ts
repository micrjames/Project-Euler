import { mults3or5 } from "../mults3or5";
import { getNums, getSum, sumEls } from "../utils/utils";

describe("Multiples of 3 or 5", () => {
   describe("Less than 10.", () => {
	  let n: number;
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 n = 10;
		 nums = getNums(n);
		 sum = sumEls(nums);
	  });
	  describe("Summed", () => {
		 test(`Should be equal to the sum, ${sum}.`, () => {
			expect(getSum(n)).toBe(sum);
		 });
	  });
   });
   describe("Less than 1000.", () => {
	  let n: number;
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 n = 1000;
		 nums = getNums(1000);
		 sum = sumEls(nums);
	  });
	  describe("Summed", () => {
		 test(`Should be equal to the sum, ${sum}.`, () => {
			expect(getSum(n)).toBe(sum);
		 });
	  });
   });
});
