export const getEvenFibs = (n: number): number[] => {
   let num1: number = 0;
   let num2: number = 2;
   let evenFibs = [num1, num2];
   let current: number;

   while(num2 < n) {
	  current = num1 + 4 * num2;
	  evenFibs = [...evenFibs, current];

	  num1 = num2;
	  num2 = current;
   }

   return evenFibs;
};
