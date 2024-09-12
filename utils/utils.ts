import { sep_vals } from "./sepVals";
import { sigma_id } from "./sigma_id";

export const getNums = (n: number): number[] => {
   return sep_vals(n, 3, 5).map((num, idx) => {
	  if(num < 0 && idx !== 0)
		 return idx;
   }).filter(num => num);
};
export const getSum = (n: number): number => {
   return sigma_id(n - 1, 3) + sigma_id(n - 1, 5) - sigma_id(n - 1, 5 * 3);
};
export const sumEls = (arr: number[]): number => {
   return arr.reduce((acc, curr) => acc + curr);
};
export const isPalindrome = (number: number): boolean => {
   let digits: number[];
   let digitsRev: number[];
   digits = digitize(number);
   digitsRev = [...digits].reverse();
   return digits.every((digit, idx) => digit === digitsRev[idx]);
};
export const digitize = (number: number, base: number = 10): number[] => {
   if(number === 0)
	  return [0];
   let digits: number[] = [];
   while(number) {
	  digits = [number % base, ...digits];
	  number = Math.floor(number / base);
   }
   return digits; 
};
