# Literal types

```ts {all|0}
// TypeScript tries to narrow down types
const thisIsLiterally1 = 1 // type: 1
const thisIsAlwaysTrue = true // type: true

const thisNeverChanges = 'Hey, Buddy!' // type: 'Hey, Buddy!'
let thisCouldBeAnyString = 'Hey, Buddy!' // type: string
```

```ts {0|all}
// Many prefer this over string enums
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6
```
