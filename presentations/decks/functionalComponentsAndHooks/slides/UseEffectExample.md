# useEffect()

```tsx {all|1-23|4-6}
import React, { useEffect } from 'react'

const Header = (props) => {
    useEffect(() => {
        document.title = "Something has changed"
    })

    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    )
}

export default React.memo(Header)
```
