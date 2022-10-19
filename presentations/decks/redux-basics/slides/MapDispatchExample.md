# `mapDispatchToProps()` Example

```tsx
import { actionCreatorFn } from 'store/somewhere'

// those two are equivalent:
// preferred way
const mapDispatchToProps = {
    actionCreatorFn,
}

// as function (not necessary in this case)
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    actionCreatorFn: () => dispatch(actionCreatorFn())
})

// if you need to customize it further:
const mapDispatchToProps = (dispatch: AppDispatch, ownProps: OwnProps) => ({
    actionCreatorFn: () => dispatch(actionCreatorFn(ownProps.something))
})
```
