# `var` vs `let` & `const`

<br>
Differences to `var`:

<v-clicks>

  - block scoped `{}`
  - variables are inaccessible before initialization (hoisting works differently)
  - `const` can't be _re-assigned_ and must be initialized during declaration
    > Note: assigned _objects_ can still be mutated!
  - rule of thumb:
    1. use `const`
    2. use `let` only if you absolutely have to
    3. never use `var`

</v-clicks>
