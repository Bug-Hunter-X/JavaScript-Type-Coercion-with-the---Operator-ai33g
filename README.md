# JavaScript Type Coercion with the + Operator
This repository demonstrates a common JavaScript bug related to type coercion using the + operator. The bug occurs due to JavaScript's loose typing system, where the + operator performs both numeric addition and string concatenation depending on the operands.

## Bug Description
In JavaScript, if you use the + operator with a mixture of numbers and strings, it concatenates them as strings instead of performing numeric addition. This behavior can lead to unexpected results and is a frequent source of errors.

## Bug Reproduction
The `bug.js` file contains a function `foo` that adds two numbers. However, if you pass a string as an argument, the result will be a string concatenation instead of the expected numeric sum.  Run the `bug.js` file to observe the unexpected output.

## Solution
The `bugSolution.js` file provides a corrected implementation of the `foo` function.  This uses `parseInt()` to ensure that the arguments are treated as numbers before adding them, thus avoiding the unexpected string concatenation.