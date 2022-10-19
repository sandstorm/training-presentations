# Redux Thunk the classical way

```tsx {all|1-6|8-11|13-16|18-24|26-40|42-60|50|53|56} {maxHeight: '100'}
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

const fetchTodos = createAction('TODOS_FETCH')
const fetchTodosSuccess = createAction<Array<Todo>>(
  'TODOS_FETCH_SUCCESS'
)
const fetchTodosFailure = createAction(
  'TODOS_FETCH_FAILURE'
)

export const fetchTodosThunk = () => async (
  dispatch: ThunkDispatch<TodosState, any, Action<any>>
) => {
  dispatch(fetchTodos)
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/todos'
    )
    const todos = await response.json()

    dispatch(fetchTodosSuccess(todos))
  } catch {
    dispatch(fetchTodosFailure())
  }
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},

  // We use extraReducers to handle actions which where not defined inside the slices "reducers"
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos, (state, _action) => {
        return { ...state, loading: true }
      })
      .addCase(fetchTodosSuccess, (_state, action) => {
        return { todos: action.payload, loading: false }
      })
      .addCase(fetchTodosFailure, (_state, _action) => {
        return { todos: [], loading: false }
      })
  },
})
```
