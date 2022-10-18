# React props

<br>

> Props make components dynamic

<br>

```tsx {all|3-6|8-13|18-27|25} {maxHeight: '100'}
import React from 'react'

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

export default Article


// Usage inside another component
import React from 'react'

import Article from './Article.tsx'

const MyComponent = () => (
    <div>
        <Article title="Hello world" text="What time is it?" />
    </div>
)
```
