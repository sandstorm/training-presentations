# Interfaces vs. type aliases

<v-clicks>

* roughly the same result
* slight differences
* but advanced topic

</v-clicks>

<v-click>

```ts
type Draggable = {
    onDrag: (ev: DragEvent) => void
}

interface Draggable {
    onDrag: (ev: DragEvent) => void
}
```

</v-click>
