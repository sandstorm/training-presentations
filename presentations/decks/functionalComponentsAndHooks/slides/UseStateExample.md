# useState()

```tsx {all|1-23|1|4|8-11|15-20} {maxHeight: '100'}
import React, { useState } from 'react'

const Accordion = (props) => {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <div className='accordion'>
            <button
              className='accordion__title'
              onClick={() => setExpanded(!isExpanded)}
            >
                Some title
            </button>

            { isExpanded && (
                    <div className='accordion__content'>
                        Some content
                    </div>
                )
            }
        </div>
    )
}

export default React.memo(Accordion)
```
