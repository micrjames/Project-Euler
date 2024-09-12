import { isPalindrome } from "./utils/utils";

/*
Largest Palindrome Product
Problem 4.
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

export const largestPalProd = (numDigits: number): number => {
   let res = 0;
   let prod: number;
   const start_point = Math.pow(10, numDigits-1);
   const end_point = Math.pow(10, numDigits);
   for(let i = start_point; i < end_point; i++)
      for(let j = start_point; j < end_point; j++) {
	     prod = i * j;
		 if(prod > res && isPalindrome(prod)) {
		    res = prod;
			console.log(res);
		 }
	  }

   return res;
};
