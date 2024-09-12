import { largestPalProd } from "../largestPalProd";

describe("Largest Palindrome Product", () => {
   let largestPalindromeProduct: number;
   const numbers = [9009, 906609];
   describe("of two 2-digit numbers", () => {
	  beforeAll(() => {
		 largestPalindromeProduct = largestPalProd(2);
	  });
	  describe("Multiplied", () => {
		 test(`Should be ${numbers[0]}`, () => {
			expect(largestPalindromeProduct).toBe(numbers[0]);
		 });
	  });
   });
   describe("of two 3-digit numbers", () => {
	  beforeAll(() => {
		 largestPalindromeProduct = largestPalProd(3);
	  });
	  describe("Multiplied", () => {
		 test(`Should be ${numbers[1]}`, () => {
			expect(largestPalindromeProduct).toBe(numbers[1]);
		 });
	  });
   });
});
