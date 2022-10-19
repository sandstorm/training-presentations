# Functions

```ts {all|1-2|4-5|7-8|10-11|13-16}
// implicit any
const add = (x, y) => x + y // signature: (x: any, y: any) => any

// declared parameters, inferred return type
const add = (x: number, y: number) => x + y

// declared return type
const add = (x: number, y: number): number => x + y

// complete function signature as type
const add: (value1: number, value2: number) => number = (x, y) => x + y

// with function keyword
function add(x: number, y: number): number {
  return x + y
}
```
