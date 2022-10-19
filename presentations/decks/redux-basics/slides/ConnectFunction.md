# connect() function

```tsx
// signature
connect(mapStateToProps, mapDispatchToProps) => ConnectorHOC(Component) => ConnectedComponent

// usage (this will be easier to use with typescript)
const Connector = connect(mapStateToProps, mapDispatchToProps)

export default Connector(Component)

// or sometimes

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```
