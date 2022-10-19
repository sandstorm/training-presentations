# String interpolation with template literals

```tsx {all|1|3-4|6-7|9-10}
const name = 'Marceline'

// concatenation with '+' operator
const strPlus = "Hi, I'm " + name + "!"

// with String.concat()
const strConcat = "".concat("Hi, I'm ", name, "!")

// with template literal
const strTemplate = `Hi, I'm ${name}!`
```
