# Higher-order functions

```tsx {all|1|3-5}
const add = (a) => (b) => a + b

const calculate = (operatorFn, operandA, operandB) => {
    return operatorFn(operandA, operandB)
}
```
