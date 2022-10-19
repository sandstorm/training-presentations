# Redux Reducer

```tsx {all|1|3|4|5-9|10-13}
const initialState = [] // empty list of Todos

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      const addedTodo = action.payload.todo
      
      return [...oldState, addedTodo]
    }
    default: {
      // leave state as it is
      return oldState
    }
  }
}
```
