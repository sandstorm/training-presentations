# Controlled Inputs

<v-clicks>

* Regular form fields keep their own state
* In react we want to track the state of form fields inside the component instead
* A form field with tracked component state is what we call a *controlled input*

</v-clicks>

<br>

<v-click>

```tsx {all|1|4|6-9|13}
import { useState } from 'react'

const MyForm = () => {
  const [inputValue, setInputValue] = useState('')

  // Typically we would also wrap this with useCallback()
  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  )
}
```

</v-click>
