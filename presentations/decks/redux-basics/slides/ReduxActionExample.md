# Redux Action & Action Creator

```tsx {all|1-9|1-7|9|11-19|11-17|12|19}
// Action object
const todoAddedAction = {
  type: 'todos/todoAdded',
  payload: {
    todoText: 'Learn Redux',
  },
}

store.dispatch(todoAddedAction)

// With Action creator
const createTodoAddedAction = (todoText) => ({
  type: 'todos/todoAdded',
  payload: {
    todoText,
  },
})

store.dispatch(createTodoAddedAction('Learn Redux'))
```
