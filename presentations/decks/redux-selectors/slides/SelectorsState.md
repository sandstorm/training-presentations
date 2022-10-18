# Select a part of the state

```tsx {all|1-6|8-9|11|13}
const myState = {
    todo: {
        allIds: ['uuid1', 'uuid2', 'uuid3'],
        byId: {...}
    }
}

// WHY "use a selector": Referencial equality!
const selectTodoIds = (state) => state.todo.allIds

console.log(selectTodoIds(myState)) // ['uuid1', 'uuid2', 'uuid3']

console.log(selectTodoIds(myState) === selectTodoIds(myState)) // ?
```

<!--
* true
-->
