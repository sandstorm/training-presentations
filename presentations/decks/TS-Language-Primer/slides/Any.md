# Type "any"

```ts 
const iCouldBeAnything: any = Math.PI

// dangerous - narrow down with type guards!
console.log(iCouldBeAnything.toFixed(2)) // no compile time error, no runtime error
console.log(iCouldBeAnything.join(' ')) // no compile time error, BUT runtime error!
```
