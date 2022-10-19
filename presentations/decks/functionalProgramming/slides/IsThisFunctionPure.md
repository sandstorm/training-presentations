# Quiz: Is this function pure?

<v-click>

```ts {1-3|2|5-7|6|9-11|13-16|14|18-21|18|23-25} {maxHeight:'100'}
const getUser = () => {
    return database.query("user")
}

const getUser2 = database => {
  return database.query("user")
}

const add2 = (x) => {
  return x + 2
}

const add = (x, y) => {
  console.log(x, y)
  return x + y
}

const greetingPhrase = "Hi"
const greet = (name) => {
  return `${greetingPhrase}, ${name}!`
}

const greet2 = (name, greetingPhrase) => {
  return `${greetingPhrase}, ${name}!`
}
```

</v-click>
