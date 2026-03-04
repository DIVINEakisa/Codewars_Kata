export function multipleOfIndex(array: number[]): number[] {
  let result: number[] = [];

  array.map((element, index) => {
    if (index === 0 && element === 0) {
      result.push(element);
    } else if (index !== 0 && element % index === 0) {
      result.push(element);
    }
  });

  return result;
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
