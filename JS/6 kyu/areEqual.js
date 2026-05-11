// Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true
function areEqual(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }

  if (typeof value1 !== "object" || value1 === null || value2 === null) {
    return value1 === value2;
  }

  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) {
      return false;
    }

    let used = new Array(value2.length).fill(false);

    for (let item1 of value1) {
      let found = false;

      for (let i = 0; i < value2.length; i++) {
        if (!used[i] && areEqual(item1, value2[i])) {
          used[i] = true;
          found = true;
          break;
        }
      }

      if (!found) {
        return false;
      }
    }

    return true;
  }

  let keys1 = Object.keys(value1);
  let keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!areEqual(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
