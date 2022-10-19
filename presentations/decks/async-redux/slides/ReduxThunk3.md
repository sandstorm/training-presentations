# Redux Thunk with RTKs `createAsyncThunk()`

```tsx {all|1|20-29|31-49|39|42|45} {maxHeight: '100'}
import { createAsyncThunk } from '@reduxjs/toolkit'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TodosState = {
  todos: Array<Todo>
  loading: boolean
}

const initialState: TodosState = {
  todos: [],
  loading: false,
}

export const fetchTodos = createAsyncThunk(
  'todos/fetch',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/todos'
    )
    const todos = await response.json()
    return todos
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},

  // We use extraReducers to handle actions which where not defined inside the slices "reducers"
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, _action) => {
        return { ...state, loading: true }
      })
      .addCase(fetchTodos.fulfilled, (_state, action) => {
        return { todos: action.payload, loading: false }
      })
      .addCase(fetchTodos.rejected, (_state, _action) => {
        return { todos: [], loading: false }
      })
  },
})
```
