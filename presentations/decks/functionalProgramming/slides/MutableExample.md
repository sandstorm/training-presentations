# Mutable example

```ts {all|2|5-6}
const compareSortedAndUnsorted = (numbers) => {
  const sortedNumbers = numbers.sort()

  // Compare first element
  return numbers[0] === sortedNumbers[0]
} // => returns true, because both arrays refer to the same mutated reference
```
