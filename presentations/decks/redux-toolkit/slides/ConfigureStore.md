# configureStore() with Redux toolkit

```tsx  {all|1-7|13-30|32-} {maxHeight: '100'}
// Traditional way:
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [
    middlewareEnhancer,
    monitorReducersEnhancer,
  ]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  )

  return store
}

// With Redux toolkit this becomes:
import { configureStore } from '@reduxjs/toolkit'

// Example
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  preloadedState,
  enhancers: [monitorReducersEnhancer],
})
```
