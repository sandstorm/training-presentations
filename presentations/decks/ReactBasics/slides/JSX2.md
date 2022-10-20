---
layout: two-cols
---

<style>
.column {
  width: 95%;
}
</style>

<div class="column">

### JSX

```tsx {all|5-8}
import React from 'react'

const text = 'text'
const MyMarkup = (
    <div className="article">
          <h2 className="title">Title</h2>
          <p className="text">{text}</p>
    </div>
)
```

</div>

::right::

<div class="column">

### Without JSX

```tsx {all|4-11}
import React from 'react'

const text = 'text'
const myMarkup = React.createElement(
    // type
    'div',
    // props
    {className: 'article'},
    // ...children
    React.createElement('h2', ...),
    ...
)
```

</div>


<!--
* Gotcha: html attribute **class** vs **className** in React (class === reserved keyword in JS!)
* builtin types (like DOM elements are called intrisic elements and lower cased
* custom Components start with an upper case letter
-->
