# Custom Hooks

```tsx {all|2|5|7-8|10-14|19-33|20|23|27|29-30} {maxHeight: '100'}
// .../.../useCounter.js
import { useState } from 'react'

export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue)

    const increase = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)

    return {
        counter,
        increase,
        decrease
    }
}


// .../.../Counter.jsx
import React from 'react'
import { useCounter } from './useCounter'

const Counter = (props) => {
    const { counter, increase, decrease } = useCounter(0)

    return (
        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default React.memo(Counter)
```
