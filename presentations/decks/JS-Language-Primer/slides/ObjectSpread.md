# Object-Spread Operator

```tsx {all|1-5|7|9-10|12-14|16-18}
const obj = {
  a: 1,
  b: 2,
  c: 3,
}

const objWithD = { ...obj, d: 4 }

// shorthand for Object.assign()
const objWithE = Object.assign({}, obj, {e: 5})

console.log(obj) // { a: 1, b: 2, c: 3 }
console.log(objWithD) // { a: 1, b: 2, c: 3, d: 4 }
console.log(objWithE) // { a: 1, b: 2, c: 3, e: 5 }

// order matters - last assignment of a property overrides previous property value
console.log({...obj, a: 5}) // {a: 5, b: 2, c: 3}
console.log({a: 5, ...obj}) // { a: 1, b: 2, c: 3 }
```
