function foo(a, b) {
  // Ensure both arguments are numbers before addition
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  if (isNaN(numA) || isNaN(numB)) {
    return "Invalid input: Both arguments must be numbers";
  }

  return numA + numB;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 2)); // Output: Invalid input: Both arguments must be numbers