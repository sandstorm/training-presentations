# Mock function from vitest

```ts {all|1-2|4-5|7-14|16-33|20-22|24-27|28-31} {maxHeight: '100'}
// 'getRandomListElement.ts'
type NumberGenerator = (min: number, max: number) => number

const getRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min

// Code under test
export const getRandomListElement = <T>(
  numberGenerator: NumberGenerator = getRandomNumber,
  list: Array<T>
): T => {
  const index = numberGenerator(0, list.length() - 1)
  return list[index]
}

// 'getRandomListElement.test.ts'
import { getRandomListElement } from 'getRandomListElement'
describe('getRandomListElement', () => {
  it('should call numberGenerator and return list item', () => {
    // Create a deterministic mock implementation of the NumberGenerator type
    // which always returns the min value
    const mockNumbeGenerator = vi.fn((min, max) => min)

    const result = getRandomListElement(
      mockNumbeGenerator,
      ['a', 'b', 'c']
    )
    expect(result).toBe('a')
    expect(mockNumbeGenerator).toHaveBeenCalled()
    expect(mockNumbeGenerator).toHaveBeenCalledTimes(1)
    expect(mockNumbeGenerator).toHaveBeenCalledWith(0, 2)
  })
})
```

<!--
- Explain fetch mocking with example in `App.test.ts` of our redux-hands-on repository
-->
