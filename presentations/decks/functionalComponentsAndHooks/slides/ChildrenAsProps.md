# Children as Props

<br>

> Allows us to create components which contain other components

<br>

```tsx {all|1-6|8-13|16-24|18|21|26-33|29-31} {maxHeight: '100'}
// Without children
const ComponentWithoutChildren = () => {
  return (
    <h1>My title</h1>
  )
}

// Usage
const App = () => {
  return (
    <ComponentWithoutChildren />
  )
}


// With children
type Props = {}
const ComponentWithChildren: FC<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

// Usage
const App = () => {
  return (
    <ComponentWithChildren>
      <p>Some text</p>
    </ComponentWithChildren>
  )
}
```
