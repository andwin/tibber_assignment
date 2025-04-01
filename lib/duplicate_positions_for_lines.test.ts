import { expect, test } from 'vitest'
import getDuplicaticatePositionsForLines from './duplicate_positions_for_lines'
import Line from './types/line'

test('crossing lines', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const line2: Line = { x1: 5, y1: 5, x2: 5, y2: -5 }
  const expectedResult = 1

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('crossing lines', () => {
  const line1: Line = { x1: 10, y1: 0, x2: 0, y2: 0 }
  const line2: Line = { x1: 5, y1: 5, x2: 5, y2: -5 }
  const expectedResult = 1

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('crossing lines', () => {
  const line1: Line = { x1: 5, y1: 5, x2: 5, y2: -5 }
  const line2: Line = { x1: 10, y1: 0, x2: 0, y2: 0 }
  const expectedResult = 1

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('overlapping horizontal lines', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const line2: Line = { x1: 5, y1: 0, x2: 15, y2: 0 }
  const expectedResult = 5

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('overlapping vertical lines', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }
  const line2: Line = { x1: 0, y1: 5, x2: 0, y2: 15 }
  const expectedResult = 5

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('lines starting at same point', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }
  const line2: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const expectedResult = 1

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('horizontal lines starting at same point', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }
  const line2: Line = { x1: 0, y1: 10, x2: 0, y2: 15 }
  const expectedResult = 1

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('non-overlapping lines', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const line2: Line = { x1: 15, y1: 0, x2: 25, y2: 0 }
  const expectedResult = 0

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('non-overlapping horizontal lines on same y', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const line2: Line = { x1: 15, y1: 0, x2: 25, y2: 0 }
  const expectedResult = 0

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('non-overlapping horizontal lines on different y', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const line2: Line = { x1: 5, y1: 1, x2: 15, y2: 1 }
  const expectedResult = 0

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})

test('non-overlapping vertical lines', () => {
  const line1: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }
  const line2: Line = { x1: 15, y1: 0, x2: 25, y2: 0 }
  const expectedResult = 0

  const result = getDuplicaticatePositionsForLines(line1, line2)

  expect(result).toBe(expectedResult)
})
