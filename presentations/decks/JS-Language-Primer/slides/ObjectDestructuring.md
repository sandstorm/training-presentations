# Destructuring objects

```tsx {all|1-8|10|11|12|14-15|16-17}
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    hero: {
      name: 'Finn',
    },
}

const {a, hero} = obj
console.log(a === obj.a) // ?
console.log(hero === obj.hero) // ?

// get the "rest" of the object as shallow copy
const {b, hero, ...rest} = obj
console.log(b) // => 2
console.log(rest) // => {a: 1, c: 3}
```

<!--
* Both console logs are 'true'
-->
