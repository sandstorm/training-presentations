# Destructuring arrays

```tsx {all|1|3|5|6|7}
const list = ['first', 'second', 'third', 'fourth']

const [head, ...tail] = list

console.log(list) // => ['first', 'second', 'third', 'fourth']
console.log(head) // => 'first'
console.log(tail) // => ['second', 'third', 'fourth']
```
