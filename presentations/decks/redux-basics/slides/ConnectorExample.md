# Connected Component

```tsx {all|1|14|16-17|19} {maxHeight: '100'}
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createResetAction } from 'store/somewhere'

const mapStateToProps = (state: AppState) => ({
    count: state.counter.count
})

const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    reset: createResetAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const CounterComponent = ({count, increment, decrement, reset}: Props) => (
    <div className="counter">
        <span className="counter__count">{count}</span>
        ...
    </div>
)

export default connector(CounterComponent)
```
