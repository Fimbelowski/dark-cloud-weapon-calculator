export default function arrayAverage(arr: number[]) {
  return arr.reduce(
    (average, current, index, { length }) => (average + current) / length,
    0
  );
}
