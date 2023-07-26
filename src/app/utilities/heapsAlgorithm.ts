import swapInPlace from './swapInPlace';

export default function heapsAlgorithm<T>(
  arr: T[],
  n = arr.length,
  results: T[][] = []
) {
  if (n === 1) {
    results.push(arr.slice());
  } else {
    for (let i = 1; i <= n; i += 1) {
      heapsAlgorithm(arr, n - 1, results);

      let j: number;

      if (n % 2 === 0) {
        j = i;
      } else {
        j = 1;
      }

      swapInPlace(arr, j - 1, n - 1);
    }
  }

  return results;
}
