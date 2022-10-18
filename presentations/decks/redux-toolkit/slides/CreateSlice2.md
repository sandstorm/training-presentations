# Handwritten redux slice prior  to RTK

```tsx {all|1-4|6-12|16-29|31-} {maxHeight: '100'}
// Action constants
const CREATE_POST = 'CREATE_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'

// Action creator
export function addPost(id, title) {
  return {
    type: CREATE_POST,
    payload: { id, title },
  }
}

const initialState = []

// Reducer
export default function postsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case CREATE_POST: {
      // Omit actual code
      break
    }
    default:
      return state
  }
}
```
