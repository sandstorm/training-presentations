# Arrow Functions

```tsx {all|1-4|6-9|11-17|19-23|25-26} {maxHeight: '100'}
// basic function declaration
function double(x) {
  return 2 * x
}

// equivalent arrow function
const double = (x) => {
  return 2 * x
}

// even shorter
// -> single argument needs
//    no parantheses
// -> expressions can be
//    returned implicitly
//    (without func body and "return")
const double = x => 2 * x

// often used as lambdas inside higher order functions
const odd = [1, 2, 3, 4].filter(x => x % 2)
const sum = [1, 2, 3, 4].reduce(
  (acc, currentValue) => acc + currentValue, 0
)

// returning object literals needs parentheses in "body-less" arrow functions
const getXObj = x => ({x}) // returns a new object with  'x' set to x
```
