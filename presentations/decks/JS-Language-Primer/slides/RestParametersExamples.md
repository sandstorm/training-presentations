# Rest Parameters Example

```tsx {all|1|2|5-6}
function sumUp(first, ...rest) {
  return rest.reduce((acc, currentValue) => acc + currentValue, first)
}

console.log(sumUp(1)) // => 1
console.log(sumUp(1, 2, 3, 4)) // => 10
```

<!--
> NOTE: Column highlighting is currently not possible - maybe use draw tool or cursor to highlight important aspects
-->
