---
layout: two-cols
---

<div class="col-left">

### Regular action creator

```tsx
const ADD_TODO = 'ADD_TODO'

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text },
  }
}
```

</div>

::right::

<div class="col-right">

##### RTK action creator with `createAction()`

```tsx {all|1-2|4-11}
const addTodo = createAction('ADD_TODO')
addTodo({ text: 'Do something' })

// With prepare callback
const addTodo = createAction('ADD_TODO', (todo) => {
  return {
    payload: todo,
    meta: 'someMetaInformation'
  }
})
addTodo({ text: 'Do something', id: '1', title: 'some todo' })
```

</div>
