# Type inference

<br>

> Types can be automatically inferred

<br>

```tsx {0|1|2|3|5-6}
const num = 42 // type: number
const str = '23' // type: string
const add = (x: number, y: number) => x + y // type: (number, number) => number

// Get the return type of a function
type AdderFnReturnType = ReturnType<typeof add> // type: number
```
