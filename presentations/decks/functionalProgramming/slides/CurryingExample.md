# Currying

```tsx {all|1|3|5-6|9-20|}
const regularAdd = (a, b) => a + b

const curryiedAdd = (a) => (b) => a + b

// Composed add 5 function
const add5 = curryiedAdd(5)

// API example
export const partial = (fn: Function, ...args: Array<unknown>): Function => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  }
}

export const request = (requestFunc: Function, url: string, delta: Object, config?: Object): Promise<any> => {
  return requestFunc(url, delta, config)
}

export const patchRequest = partial(request, axios.patch, 'https://somedomain.net')
export const postRequest = partial(request, axios.post, 'https://somedomain.net')
```
