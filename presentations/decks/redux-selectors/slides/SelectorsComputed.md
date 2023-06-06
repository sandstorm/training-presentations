# Select computed/derived state

```tsx {all|1-6|8|11|13|9|14}
const myState = {
    todo: {
        allIds: ['uuid1', 'uuid2', 'uuid3'],
        byId: {...}
    }
}

const selectTodoCount = (state) => state.todo.allIds.length
const selectCompletedTodos = (state) => state.todo.allIds.filter(id => state.todo.byId[id].completed)

console.log(selectTodoCount(myState)) // 3

console.log(selectTodoCount(myState) === selectTodoCount(myState)) // ?
console.log(selectCompletedTodos(myState) === selectCompletedTodos(myState)) // ?
```

<!--
* true
* false -> what does that mean for our component?
    * when selector is run twice _with the same state_ it will compute again _and_ get a new reference
-->
