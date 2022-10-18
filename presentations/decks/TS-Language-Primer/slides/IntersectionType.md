# Intersection-Type

<br>

> Thinks: "It's both"

<br>

```ts {all|1-9|11|13-18} {maxHeight: '100'}
type FlyingAnimal = {
  fly: () => void
  flyingSpeedKmPerSec: number
}

type RunningAnimal = {
  run: () => void
  legCount: number
}

type Hippogriff = FlyingAnimal & RunningAnimal

const witherwings: Hippogriff = {
  fly: () => { console.log('shwooosh') },
  flyingSpeedKmPerSec: 9001,
  run: () => { console.log(`I'd rather fly!`)},
  legCount: 4,
}
```
