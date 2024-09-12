import { isPalindrome } from "./utils/utils";

/*
Largest Palindrome Product
Problem 4.
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

export const largestPalProd = (num: number): number => {
   let nums: number[] = [];
   for(let i = 10; i < 100; i++)
      for(let j = 10; j < 100; j++) {
	    const prod = i * j;
	  	nums = [...nums, prod];
	  }
   // return isPalindrome(num);
   return -1;
};
