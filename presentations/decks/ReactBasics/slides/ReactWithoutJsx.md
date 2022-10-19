# React without JSX

```tsx {all|5-10}
import React from 'react'

const text = 'text'
const myMarkup = React.createElement(
    // type (built-in types called intrinsic elements in lower case - Components in upper case)
    'div',
    // props
    {className: 'article'},
    // ...children
    React.createElement('h2', ...),
    ...
)
```
