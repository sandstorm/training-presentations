# Union types

<br>

> Think: "It's either this **or** that"

<br>

```ts {all|1-15|17|19-28} {maxHeight: '100'}
enum HTTPStatusCode {
  Ok = 200,
  NotFound = 404,
  ImATeaPot = 418
}

type SuccessResponse = {
  code: HTTPStatusCode.Ok
  body: string
}

type ErrorResponse = {
  code: HTTPStatusCode.NotFound
  errorMsg: string
}

type MyResponse = SuccessResponse | ErrorResponse

function handleError(response: MyResponse) {
  switch(response.code) {
    case HTTPStatusCode.Ok:
      return `YAY, ${response.body}`
    case HTTPStatusCode.NotFound:
      return `Aww, ${response.errorMsg}`
    default:
      throw new Error(`Wat, ${response}`) // type of response is never
  }
}
```
