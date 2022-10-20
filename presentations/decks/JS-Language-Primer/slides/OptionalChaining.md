# Optional Chaining with elvis operator `?.*`

<br>

## Old way of savely traversing objects

```tsx {all|4}
const user = {}
let street = undefined

if (user && user.address && user.address.street) {
    street = user.address.street
}

console.log(street) // => undefined
```

<br>
<br>

## With optional chaining

```tsx {0|all|1}
const elvisStreet = user?.address?.street

console.log(elvisStreet)
```
