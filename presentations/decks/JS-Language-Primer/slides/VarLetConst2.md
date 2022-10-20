# `var` vs `let` & `const` Examples

```ts {all|1-4|4-7|9-12|14-17|17-20|22-25|27-30|32-33|35-37} {maxHeight: '100'}
// This will log "undefined", because the variable declaration is being hoisted
console.log(x)

var x = 1

// This will log "1" as expected
console.log(x)

x = 2

// This will log "2" as expected
console.log(x)

// This will result in an error, because let isn't hoisted:
// Uncaught ReferenceError: can't access lexical declaration 'y' before initialization
console.log(y)
let y = 1

// This will log "1" as expected
console.log(y)

y = 2

// This will log "2" as expected
console.log(y)

// This will result in an error, because const isn't hoisted:
// Uncaught ReferenceError: can't access lexical declaration 'z' before initialization
console.log(z)
const y = 1

// This will log "1" as expected
console.log(z)

// This will result in an error, because const can't be re-assigned to
// Uncaught TypeError: invalid assignment to const 'z'
y = 2
```
