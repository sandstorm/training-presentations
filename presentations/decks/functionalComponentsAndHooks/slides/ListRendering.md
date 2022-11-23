# List-Rendering

<br>

> NOTE: React needs the 'key' prop to avoid unnecessary re-renders

<br>

```tsx {maxHeight: '100'}
type User = {
  id: string
  name: string
}

type Props = {
  users: User[]
}

const Component = ({ users }: Props) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  )
}
```
