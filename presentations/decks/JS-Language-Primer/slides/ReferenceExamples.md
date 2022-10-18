# Reference Examples

```tsx {all|4-8|13-17}
// create reference
const a = {}

// copy reference
const b = a

console.log(a === b)
console.log(a === {})

function c() {}
function d() {}

// copy reference of c
const e = c

console.log(c === d)
console.log(c === e)
```

<!--
* First console.logs: true, false
* Second console.logs: false, true
-->
