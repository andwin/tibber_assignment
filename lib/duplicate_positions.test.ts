import { expect, test } from 'vitest'
import Line from './types/line'
import duplicatePositions from './duplicate_positions'

test('duplicatePositions of single line', () => {
  const line: Line = { x1: 5, y1: -5, x2: 5, y2: 5 }
  const lines: Line[] = [
    { x1: 0, y1: 0, x2: 10, y2: 0 },
  ]
  const expectedResult = 1

  const result = duplicatePositions(line, lines)

  expect(result).toBe(expectedResult)
})

test('duplicatePositions of multiple lines', () => {
  const line: Line = { x1: 5, y1: -5, x2: 5, y2: 5 }
  const lines: Line[] = [
    { x1: 0, y1: 0, x2: 10, y2: 0 },
    { x1: 0, y1: 1, x2: 10, y2: 1 },
  ]
  const expectedResult = 2

  const result = duplicatePositions(line, lines)

  expect(result).toBe(expectedResult)
})
