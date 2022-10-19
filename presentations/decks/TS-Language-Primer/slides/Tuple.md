# Tuples

<v-clicks>

* array with a fixed* number of elements
* whose types are known
* but need not be the same

</v-clicks>

<v-click>

```ts {0|1|2|4-5}
const vector2d: [number, number] = [2, 2]
const mapping: [number, string] = [2, 'two']

// Tuple with variable length
const something: [string, boolean, ...number[]] = ['str', true, 1, 2, 3]
```

</v-click>
