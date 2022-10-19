# Null and undefined

```ts {all|1-2|4}
const notDefined = undefined // type: undefined
const doesNotExist = null // type: null

const canOnlyBeUndefined: undefined = null // error
```
