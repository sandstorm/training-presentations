# Rules of hooks

<br>

> Don't do this!!!

<br>

```tsx {all|4|5-8}
const MyComponent = (props) => {
    // ... some code

    if (props.loading) {
        useEffect(() => {
            // do something
        })
    }

    return // some code
}
```
