import { Primes } from "./Primes/Primes";

// Largest Prime Factor
// Problem 3.
// The prime factors of 13195 are 5, 7, 13 and 29.
  
// What is the largest prime factor of the number 600851475143?

export const largestPrimeFactor = (n: number): number => {
   let primes: Primes = new Primes(1000);
   const nums = [...primes];
   let factors: Array<number> = [];
   /*
   let i: number = 2;
   while(i * i < n) {
	   while(n % i == 0)
		   n /= i;
	   i++; 
   }
   */
   /*
   while (n % 2 == 0) {
	  factors = [...factors, 2];
	  n = Math.floor(n/2);
   }
   // n must be odd at this point. So we can skip
   // one element (Note i = 1 +2)
   for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
	  // While i divides n, print i and divide n
	  while(n % i == 0) {
		 factors = [...factors, i];
		 n = Math.floor(n / i);
	  }
   }
   // This condition is to handle the case when n
   // is a prime number greater than 2
   if(n > 2)
	  factors = [...factors, n];

   // return n;
   */
   for(const num of nums)
	  while(n % num === 0) {
		 factors = [...factors, num];
		 n = Math.floor (n / num);
	  }

   return Math.max(...factors);
};
