<style>
  .code-wrapper {
    max-height: 80%;
    overflow: auto;
  }
</style>

# Equality in JS - Quiz

<div class="code-wrapper">

<v-clicks>

```ts
// 1.
'' == []
'' === []
```

```tsx
// 1.
'' == [] // true
'' === [] // false
```

```tsx
// 2.
[] == []
[] === []
```

```tsx
// 2.
[] == [] // false
[] === [] // false
```

```tsx
// 3.
0 == false
0 === false
```

```tsx
// 3.
0 == false // true
0 === false // false
```

```tsx
// 4.
1 == 2
1 === 2
```

```tsx
// 4.
1 == 2 // false
1 === 2 // false
```

```tsx
// 5.
undefined == null
undefined === null
```

```tsx
// 5.
undefined == null // true
undefined === null // false
```

```tsx
// 6.
undefined == false
undefined === false
```

```tsx
// 6.
undefined == false // true
undefined === false // false
```

```tsx
// 7.
{} == {}
{} === {}
```

```tsx
// 7.
{} == {} // false
{} === {} // false
```

```tsx
// 8.
NaN == NaN
NaN === NaN
```

```tsx
// 8.
NaN == NaN // false
NaN === NaN // false
```

</v-clicks>

</div>

<!--

NOTE: This usually takes rather long - might skip this or only do a few examples!

1. true - false
2. false - false
3. true - false
4. false - false
5. true - false
6. true - false
7. false - false
8. false - false

-->
