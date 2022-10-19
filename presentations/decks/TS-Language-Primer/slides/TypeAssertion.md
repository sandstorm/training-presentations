# Type assertions

<br>

> CAUTION: Only do this if you are absolutely sure - it's usually safer/better to use type guards instead!

<br>

```ts {all|3-4}
let someValue: unknown = 'this is a string'

console.log((someValue as string).length)
console.log((someValue as number).toFixed(2)) // no compile time error, BUT runtime error
```
