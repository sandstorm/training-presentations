# Objects

```tsx {all|1-4|6-7|9-14|16-17|19-20} {maxHeight: '100'}
const person = {
    name: 'Dude Dudeson',
    age: 20
}

// Mutably change property (or even add property)
person.name = 'Matthilda Musterfrau'

// Immutably change property (or even add property)

const matthilda = {
    ...person,
    name: 'Matthilda Musterfrau'
} // => will also have her age set to 20

// Mutably remove value from object
delete person.name

// Immutably remove value from object
const {name, ...newObject} = person // => newObject omits the name property
```
