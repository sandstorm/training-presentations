# Type "any"

```ts 
const iCouldBeAnything: any = Math.PI

// dangerous - narrow down with type guards!
console.log(iCouldBeAnything.toFixed(2)) // no compile time error, no runtime error
console.log(iCouldBeAnything.join(' ')) // no compile time error, BUT runtime error!
```

<!--
* Sollte nur in absoluten Ausnahmefaellen verwendet werden (bspw. wenn ein verwendetes externes Package
  selbst keine Typings hat - das kommt inzwischen allerdings nur noch sehr sehr selten vor)
-->
