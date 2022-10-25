# Handling async code in React

```tsx {all|10-13|15|17-25|36-|52-55} {maxHeight: '100'}
// Fetch handling inside component
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from 'Redux/Store'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  addPost: actions.addPost,
  fetchPostError: actions.fetchPostError,
}

const SomeComponent = ({ addPost, fetchPostError }) => {
  // ...

  useEffect(() => {
    fetch('https://example.com/post/1')
      .then(response => {
          return response.json()
      })
      .then(post => addPost(post)) // dispatch action
      .catch(error => fetchPostError(error)) // dispatch action
  }, [addPost, fetchPostError])

  // ...

  return (
    // ...
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponent)

// Fetch handling outside of components
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from 'Redux/Store'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  fetchPost: actions.fetchPost,
}

const SomeComponent = ({ fetchPost }) => {
  // ...

  useEffect(() => {
    // fetch, success, failure are all handled outside
    fetchPost()
  }, [fetchPost])

  // ...

  return (
    // ...
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponent)
```
