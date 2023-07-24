export default function swapInPlace<T>(
  arr: T[],
  indexA: number,
  indexB: number
) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
