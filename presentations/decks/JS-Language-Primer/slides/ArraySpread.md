# Array-Spread

```tsx {all|1-2|4-5|7|9-11}
const list = [1, 2, 3, 4]
const listCopy = [...list] // creates a shallow copy of list

console.log(list) // [1, 2, 3, 4]
console.log(listCopy) // [1, 2, 3, 4]

console.log(list === listCopy)

// order matters - array is filled in order
console.log([...list, 5]) // [1, 2, 3, 4, 5]
console.log([0, ...list, 5]) // [0, 1, 2, 3, 4, 5]
```
