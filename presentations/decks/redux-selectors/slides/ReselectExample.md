---
layout: two-cols
---

# Reselect Example

#### How does it work?

<v-clicks>

* Passing all parameters to all "input selectors"
* Saving all the input selector results to an array
* Checking to see if any input results changed by reference
* If so, passing all input results to the output selector
* If not, return the previous result of output selector
* Caculate the result of the output selector

</v-clicks>

::right::

```tsx {all|8-17|10-14|15-16}
import { createSelector } from '@reduxjs/toolkit'

const selectTodos = (state) => state.data.todo.byId
const selectTodoIds = (state) => state.data.todo.allIds
// no need to memoize
const selectTodoCount = (state) => selectTodoIds(state).length

// memoized selector
const selectCompletedTodoIds = createSelector(
    // input selectors
    [
        selectTodoIds, // (state) => state.data.todo.allIds
        selectTodos, // (state) => state.data.todo.byId
    ],
    // output selector
    (todoIds, todos) => todoIds.filter(id => todos[id].isCompleted)
)
```
