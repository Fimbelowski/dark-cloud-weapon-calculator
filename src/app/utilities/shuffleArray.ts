import swapInPlace from './swapInPlace';

export default function shuffleArray<T>(arr: T[]) {
  const result = arr.slice();
  for (let i = result.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    swapInPlace(result, i, randomIndex);
  }

  return result;
}
