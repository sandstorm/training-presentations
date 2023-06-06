# connect() function

```tsx
// usage (this will be easier to use with typescript)
const Connector = connect(mapStateToProps, mapDispatchToProps)

export default Connector(Component)

// or sometimes

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```

<!--
- TODO: remove signature part and _maybe_ draw a picture instead
-->
