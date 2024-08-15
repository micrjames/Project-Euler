import { Fibonacci } from "../Fibonacci/Fibonacci";

export const getFibsUpToVal = (maxValue: number): number[] => {
   const fib: Fibonacci = new Fibonacci(Infinity);
   let fibsArr: number[] = [];
   let fibValue: number = fib.next().value;
   while(fibValue < maxValue) {
	  if(fibValue % 2 === 0) fibsArr = [...fibsArr, fibValue];
	  fibValue = fib.next().value;
   }

   return fibsArr;
};
