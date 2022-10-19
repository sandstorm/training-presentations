# Arrays

```tsx {all|1-3|5-6|8-9|11-12|14-15|} {maxHeight: '100'}
// Mutable way to add to array
const myArray = [1, 2, 3, 4]
myArray.push(5)

// Immutable way to add to array
const arrayWithNewElement = [ ...myArray, 5 ]

// Mutable way to remove element from array
myArray.pop()

// Immutable way to remove element from array
const newArray = myArray.slice(0, myArray.length - 1)

// or use destructuring and the rest operator
const [head, ...newArray] = myArray
```
