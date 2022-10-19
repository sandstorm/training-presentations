# Nullish Coalescing Operator

<v-clicks>

* Similar but safer as || operator

```tsx {all|4-5|7-8|10-12}
const _this = undefined
const _that = 'that'

// works but dangerous! -> falsy values can introduce errors
const thisOrThatWithOr = _this || _that

// safer with ternary operator
const thisOrThatWithTernary = _this !== null ? _this : _that

// nullish coalescing -> explicitly checks if _this is null or undefined
// -> remember: undefined == null is "true" but falsyValue == null is "false"
const thisOrThatWithNC = _this ?? _that
```

</v-clicks>
