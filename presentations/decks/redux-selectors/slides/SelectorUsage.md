---
layout: two-cols
---

<style>
.without-selector, .with-selector {
    width: 90%;
}
</style>

# Without selector

<div class='without-selector'>

```tsx {4}
import { selectTodosIds } from 'store/...'

const mapStateToProps = (state) => ({
    todoIds: state.todo.allIds,
})

...
```

</div>

::right::

# With selector

<div class="with-selector">

```tsx {4}
import { selectTodosIds } from 'store/...'

const mapStateToProps = (state) => ({
    todoIds: selectTodoIds(state),
})

...
```

</div>
