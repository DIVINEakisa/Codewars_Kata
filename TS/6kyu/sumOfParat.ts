export function partsSums(ls: number[]): number[] {
  {
    let result = [];
    let total = ls.reduce((a, b) => a + b, 0);

    result.push(total);

    for (let i = 0; i < ls.length; i++) {
      total -= ls[i];
      result.push(total);
    }

    return result;
  }
}
console.log(partsSums([0, 1, 3, 6, 10]));
