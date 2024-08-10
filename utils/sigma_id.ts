export const sigma_id = (UB: number, d: number) => {
   return d * (Math.floor(UB/d) * (Math.floor(UB/d) + 1)) / 2;
};
