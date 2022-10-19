# Object-Spread Quiz

```tsx {all|1-8|10-11|13-14}
const obj = {
  a: 1,
  b: {
    c: 'nestedString'
  },
}

const shallowCopy = { ...obj }

console.log(obj)          // { a: 1, b: { c: 'nestedString' } }
console.log(shallowCopy)  // { a: 1, b: { c: 'nestedString' } }

console.log(obj === shallowCopy) // ?
console.log(obj.b === shallowCopy.b) // ?
```

<!--
* First console.log => false
* Second console.log => true
-->
