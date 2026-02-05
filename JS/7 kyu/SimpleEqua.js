// Description:
// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.

function solve(eq) {
  var equ = eq.split(/([*+\-/])/);
  var filteredEqu = equ.filter((equt) => equt !== "");
  const reversedEqu = filteredEqu.reverse();

  return reversedEqu.join("");
}
