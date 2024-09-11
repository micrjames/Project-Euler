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
export const isPalindrome = (str: string): boolean => {
   return false;
};
