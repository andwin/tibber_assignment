import { expect, test } from 'vitest'
import rotateLine from './rotate_line'
import Line from './types/line'

test('rotateLine', () => {
  const line: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const expectedResult: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }

  const result = rotateLine(line)

  expect(result).toEqual(expectedResult)
})
