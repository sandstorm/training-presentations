# useDispatch()

<v-clicks>

* Allows us to use the `dispatch()` function of the store inside our components
* That way we can directly dispatch actions over our store

</v-clicks>

<br>

<v-click>

```tsx {all|2|3|7|9-11|15}
import { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from 'src/redux/store/hooks'
import { actions } from 'src/redux/store'

const Counter = () => {
  const count = useAppSelector((state) => state.count)
  const dispatch = useAppDispatch()
  
  const increaseCount = useCallback(() => {
    dispatch(actions.incrementCount())
  }, [dispatch])

  return (
    <p>Current count: {count}
    <button onClick={increaseCount}>+1</button>
  )
}
```

</v-click>
