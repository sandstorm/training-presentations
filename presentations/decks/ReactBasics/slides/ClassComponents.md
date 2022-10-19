# Class components

<br>

> "Doing react the old school way"

<br>

```tsx {all|8-17} {maxHeight: '100'}
import React from 'react'

type ArticleProps = {
    title: string
    text: string
}

class Article extends React.PureComponent<ArticleProps> {
  render() {
    return (
        <article className="article">
            <h2 className="title">{this.props.title}</h2>
            <p className="text">{this.props.text}</p>
        </article>
    )
  }
}

export default Article
```

<!--
* Still perfectly valid to use, though most teams prefer to use functional components instead
* You can mix and match, if necessary
* Make clear that this has basically nothing to do with traditional OOP and
is merely an implementation detail of the old class based API.
-->
