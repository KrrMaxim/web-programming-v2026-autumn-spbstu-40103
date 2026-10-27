export function mergeArrays(arr1, arr2) {
  let result = [...arr1];

  for (let i of arr2) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }

  return result;
}
