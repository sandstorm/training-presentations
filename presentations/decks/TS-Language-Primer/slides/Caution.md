# Caution! - Always use the lower case type for primitives

```ts
const str: string = new String() // type string !== type String

/* TypeScript error message:
Type 'String' is not assignable to type 'string'.
  'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
```
