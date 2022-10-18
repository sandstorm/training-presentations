# `mapStateToProps()` Example

```tsx
const mapStateToProps = (state) => ({
  isCollapsed: state.ui.sidebar.isCollapsed
})

// with ownProps
const mapStateToProps = (state, ownProps) => ({
  todo: state.data.todo.byId[ownProps.todoId]
})
```
