function merge(arr: number[], left: number, middle: number, right: number) {
  let i = left;
  let j = middle;
  let k = 0;

  let inversions = 0;

  const merged: number[] = [];

  while (i < middle && j <= right) {
    if (arr[i] <= arr[j]) {
      merged[k] = arr[i];
      i++;
      k++;
    } else {
      merged[k];
      inversions += middle - i;
      j++;
      k++;
    }
  }

  while (i < middle) {
    merged[k] = arr[i];
    k++;
    i++;
  }

  while (j <= right) {
    merged[k] = arr[j];
    j++;
    k++;
  }

  k = 0;

  for (let i = left; i < right + 1; i++) {
    arr[i] = merged[k];
    k++;
  }

  return inversions;
}

function mergeSort(arr: number[], left: number, right: number) {
  let inversions = 0;

  if (right > left) {
    const middle = Math.floor((left + right) / 2);

    inversions = mergeSort(arr, left, middle);
    inversions += mergeSort(arr, middle + 1, right);
    inversions += merge(arr, left, middle + 1, right);
  }

  return inversions;
}

export default function countInversions(arr: number[]) {
  return mergeSort(arr, 0, arr.length - 1);
}
