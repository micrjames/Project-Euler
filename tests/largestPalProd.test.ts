import { largestPalProd } from "../largestPalProd";

describe("Largest Palindrome Product", () => {
   beforeAll(() => {
	  const strings = ["doggies", "otto", "hannah"];
	  for(let it = 0; it < strings.length; it++)
	  	console.log(largestPalProd(strings[it]));
   });
   describe("of two 2-digit numbers", () => {
	  beforeAll(() => {
	  });
	  describe("Multiplied", () => {
		 test.todo("Should be ...");
	  });
   });
   describe("of two 3-digit numbers", () => {
	  beforeAll(() => {
	  });
	  describe("Multiplied", () => {
		 test.todo("Should be ...");
	  });
   });
});
