# Composition

```ts {all|1-15|17-19|21-34|35} {maxHeight: '100'}
type UserId = number

type Address = {
  city: string
  street: string
  houseNumber: number
}

type User = {
  id: UserId
  name: string
  address?: Address
}

type Users = Array<User>

const renderUsers = (users: Users): Array<string> => {
  return users.map(user => `User ${user.id} is named "${user.name}"`)
}

const users: Users = [
  {
    id: 1,
    name: 'Finn'
  },
  {
    id: 2,
    name: 'Jake'
  },
  {
    id: 3,
    name: 'Marceline'
  },
]
console.log(renderUsers(users))
```
