# useReducer()

```tsx {all|3|4|5-7|20-21} {maxHeight: '100'}
// Pure reducer function (could reside anywhere inside our code
// but should preferably be defined outside of our component)
const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'A': {
            return 'Something'
        }

        case 'B': {
            return 'Else'
        }

        default: {
            return state // simply return the previous state
        }
    }
}


// Hook call inside our component
const [state, dispatch] = useReducer = (reducerFunction, initialstate)
```

<!--
* Explain block scope for `switch case` statements
-->
