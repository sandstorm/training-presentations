# Generics

```ts {all|1|5-6}
function identity<T>(arg: T): T {
  return arg
}

const one = identity<number>(1) // type: number
const two = identity(2) // type: number (inferred)
```
