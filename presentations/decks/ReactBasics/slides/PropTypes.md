# PropTypes

<v-clicks>

* External library (has to be installed + imported manually)
* Enables runtime type checking of props
* Rarely used in projects that also use static typing with typescript

</v-clicks>

<v-click>

```tsx {all|16-19} {maxHeight: '100'}
import React from 'react'
import PropTypes from 'prop-types'

type ArticleProps = {
    title: string
    text: string
}

const Article = (props: ArticleProps) => (
    <article className="article">
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
    </article>
)

Article.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Article
```

</v-click>

<!--
* You could also type with **React.FC**, however there are currently a few Gotchas you have to be awaware of and the behavior is slightly different: https://github.com/typescript-cheatsheets/react#function-components
-->
