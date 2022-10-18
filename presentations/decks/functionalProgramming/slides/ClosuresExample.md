# Closures

```tsx {all|1-5|7-15|7-11|13-14|15} {monaco}
  const greeting = 'Good morning'

  const greet = (name) => {
      return `${greeting} ${name}`
  }

  const greeterFactory = (salutation) => {
      const greeting = 'Good morning'

      return (name) => `${greeting} ${salutation} ${name}!`
  }

  const greetWoman = greeterFactory('Mrs.')
  const greetMan = greeterFactory('Mr.')
  greetWoman('Princess Bubblegum') // => 'Good morning Mrs. Princess Bubblegum'
```
