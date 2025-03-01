function foo(a, b) {
  if (a === null && b === null) {
    return null; //Explicitly handle both null case
  } else if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(1, null)); // null
console.log(foo(null, 1)); // null
console.log(foo(1, 2));    // 3
console.log(foo(null, null)); // null