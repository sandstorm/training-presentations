# useEffect() with dependencies

```tsx {all|1-9|6}
const MyComponent = ({ someProp }) => {
    // ... some code

    useEffect(() => {
      // The code in here will only be run if 'someProp' has changed
    }, [someProp])

    return // .... some code
}
```
