# useEffect() with cleanup

```tsx {all|1-6|2-4|5|6}
useEffect(() => {
    const timer = setTimeout(() => {
        console.log('This will run after 1 second!')
    }, 1000)
    return () => clearTimeout(timer)
}, []) // empty dependency array -> effect will be triggered exactly once after the first render
```
