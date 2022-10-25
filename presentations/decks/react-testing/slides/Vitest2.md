# Typical vitest test suite

```ts {all|1-2|4-9|10-13|15-18|20-23|25-28|30-37|32-33|35-36|39-50|50-66} {maxHeight: '100'}
// NOTE: "describe", "it", "test", "expect" are all globals exposed by Jest!
import { someOperation } from '../someFile'

// Main test suite of this file
// (technically you could have multiple first level suites!)
//
// The name "first test suite" will be displayed inside the test runner.
// (same for "it" and "test")
describe("first test suite", () => {
  // Some setup etc. which is run before all the tests are running
  beforeAll(() => {
    // ...
  })

  // Some tear down etc. which is run after all test have been executed
  afterAll(() => {
    // ...
  })

  // Setup which is run before each test
  beforeEach(() => {
    setupSomething()
  })

  // Tear down which is run after each test
  afterEach(() => {
    cleanUpSomething()
  })

  // A single unit test case (you could also use the function "it" instead of "test")
  test("a single test", () => {
    // Create a result with our imported "someOpearion" function
    const result = someOperation(someParam)

    // Check if the result is true - otherwise this test will fail
    expect(result).toBe(true)
  })

  // We can add additional scope to our tests by nesting describe blocks
  // This makes it easier to understand in what context certain tests are run.
  // The test runner will display the nested names indented, e.g.:
  //
  // first test suite
  //     a single test
  //     some context a
  //          should do something
  //          should work somehow
  //     some context b
  //          should do something else
  describe("some context a", () => {
    // A test case with "it"
    it("should do something", () => {
      // ...
    })

    it("should work somehow", () => {
      // ...
    })
  })

  describe("some context b", () => {
    it("should do something else", () => {
      // ...
    })
  })
})

describe("second test suite", () => {
  // ...
})
```
