import { mults3or5 } from "../mults3or5";
import { getNums, getSum, sumEls } from "../utils/utils";

describe("Multiples of 3 or 5", () => {
   describe("Less than 10.", () => {
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 nums = getNums(10);
		 sum = sumEls(nums);
	  });
	  describe("Summed", () => {
		 test.todo(`Should be equal to the sum, ${sum}.`);
	  });
   });
   describe("Less than 1000.", () => {
	  let nums: number[] = [];
	  let sum: number;
	  beforeAll(() => {
		 nums = getNums(1000);
		 sum = sumEls(nums);
	  });
	  describe("Summed", () => {
		 test.todo(`Should be equal to the sum, ${sum}.`);
	  });
   });
});
