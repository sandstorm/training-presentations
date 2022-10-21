## Functional Components

<v-clicks>

* JS-functions which accpet props as arguments and return JSX
* Return is equivalent to `render()` method in classes

</v-clicks>

<v-click>

```tsx title="Functional Components"
const Header = (props) => {
  return (
    <div className='header'>
      {/* This is a comment inside JSX */}
      <Logo />
      <Navigation />
    </div>
  )
}
```

</v-click>
