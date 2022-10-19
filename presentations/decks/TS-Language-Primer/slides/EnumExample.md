# Enum Example

```ts {all|1-5|7-9|11-20|22-24}
enum HTTPStatusCode {
  Ok = 200,
  NotFound = 404,
  ImATeaPot = 418
}

console.log(HTTPStatusCode.Ok) // 200
console.log(HTTPStatusCode[418]) // ImATeaPot
console.log(HTTPStatusCode[500]) // undefined

function handleResponse(body: string, statusCode: HTTPStatusCode): string {
  switch(statusCode) {
    case HTTPStatusCode.Ok:
      return `YAY: ${body}`
    case HTTPStatusCode.ImATeaPot:
      return 'It\'s tea time!'
    default:
      return 'nah!'
  }
}

console.log(handleResponse('done!', HTTPStatusCode.Ok))
console.log(handleResponse('...', HTTPStatusCode.ImATeaPot))
console.log(handleResponse('ooops!', HTTPStatusCode.NotFound))
```

<!--
Explain enum as function parameter type on handleResponse
-->
