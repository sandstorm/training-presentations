# Using the thunk action creator inside a component

```tsx {all|2|4|12-14|16-22|24|43|25-28} {maxHeight: '100'}
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../app/store'
import { fetchTodos, selectors } from './todosSlice'

const mapStateToProps = (state: RootState) => {
  return {
    todos: selectors.getTodos(state),
  }
}

const mapDispatchToProps = {
  fetchTodos,
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Todos = (props: Props) => {
  useEffect(() => {
    props.fetchTodos()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map((todo) => (
        <>
          <p>{todo.title}</p>
          <p>completed: {todo.completed ? 'yes' : 'no'}</p>
        </>
      ))}
    </div>
  )
}

export default connector(Todos)
```

<!--

The code diff first explains how to type connected Props.
Then it will show the `useEffect()` with the action dispatch

* Afterwards Exercises 6-10

-->
