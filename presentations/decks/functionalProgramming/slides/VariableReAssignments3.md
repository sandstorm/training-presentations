# Variable Reassignment

```tsx {all|1-10|3-7|12-17|14-16|} {maxHeight: '100'}
// Mutable way
const sumList = (numberList) => {
    let sum = 0

    for (let index = 0 index < numberList.length index++) {
      sum = sum + numberList[index]
    }

    return sum
}

// Immutable way
const sumListImmutably = (numberList) => {
    return numberList.reduce((sum, number) => {
      return sum + number
    }, 0)
}
```
