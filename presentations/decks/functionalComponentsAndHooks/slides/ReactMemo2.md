# React.memo()

```tsx {all|1|3-10|12}
import React from 'react'

const Header = (props) => {
    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    )
}

export default React.memo(Header)
```

<!--
* Its important to not directly wrap the component, but its export
* Otherwise the displayname will not be calcualted correctly
-->
