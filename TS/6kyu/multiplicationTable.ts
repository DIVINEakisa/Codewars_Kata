// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable(size: number): number[][] {
  let result: number[][] = [];
  for (let i = 1; i <= size; i++) {
    let row: number[] = [];
    for (let j = 1; j <= size; j++) {
      let calculate: number = i * j;
      row.push(calculate);
    }
    result.push(row);
  }
  return result;
}
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
