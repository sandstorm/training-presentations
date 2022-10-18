# Redux slice with RTK

```tsx {1-13|15-|20-21|22|23|25-27|28-35} {maxHeight: '100'}
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

const { actions, reducer } = postsSlice
export const { createPost } = actions
export default reducer


//////////////////////
// Extended Example //
//////////////////////

// Named slice
const postsSlice = createSlice({
  name: 'posts', // determines the prefix of action types, e.g. 'posts/createPost'
  initialState: [], // initial state of the slice

  // Here we define all of our reducer branches/cases
  // (note we still only receive a single reducer function in the end)
  reducers: {
    // There's a lot happening here:
    // 1. We create a new action creator called `createPost`
    // 2. The action type of the post is set to `posts/createPost`
    // 3. We create a matching case in our reducer which handles the afforementioned type
    //    and returns a new state with a new post which is derived from the action.payload
    createPost(state, action) {
      return [...state, action.payload]
    },
    updatePost(state, action) {
      // ...
    },
    deletePost(state, action) {
      // ...
    },
  },
})

// Destructure actionCreators and the reducer of this slices
const { actions, reducer } = postsSlice

// Seperately export a single actionCreator
// (you don't need to do this!)
export const { createPost } = actions

// Use the reducer as the modules default export
// (you could also use the slice itself instead and access the reducer
// property inside the parent modules `combineReducers()` call)
export default reducer
```
