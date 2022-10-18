# Enum

<br>

> Think: "Type and value at the same time"

<br>

```ts {all|1-5|7|9|10|11}
enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green

console.log(c === Color.Blue) // ?
console.log(c, Color.Green) // ?
console.log(Color[c], Color[Color.Green]) // ?
```

<!--
1. false
2. 1 1
3. Green Green
-->
