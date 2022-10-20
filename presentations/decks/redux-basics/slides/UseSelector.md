# useSelector()

<v-clicks>

* Allows us to select parts of our application state and use them inside our components
* Takes a selector function as parameter (more details on selectors later)
* Uses strict equality reference comparison by default (to determine if the component needs to re-render)
* Can be used multiple times throughout a component - the result will be batched
* This means that only a single re-render will occur if a redux action leads to multiple updated selectors

</v-clicks>

<br>

<v-click>

```tsx
import { useAppSelector } from 'src/redux/store/hooks'

const Counter = () => {
  const count = useAppSelector((state) => state.count)

  return (
    <p>Current count: {count}
  )
}
```

</v-click>
