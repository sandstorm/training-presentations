# Immutable Example
  
```tsx {all|2|3|6-7}
const compareSortedAndUnsortedCorrectly = (numbers) => {
  const numbersCopy = [ ...numbers ]
  const sortedNumbers = numbersCopy.sort()

  // Compare first element
  return numbers[0] === sortedNumbers[0]
} // => returns false, because we created a new array first
```

<!--

Show browser example!

-->
