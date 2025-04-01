import { expect, test } from 'vitest'
import { getLineLength, getLineLengths } from './line_length'
import Line from './types/line'

test('getLineLength', () => {
  const line: Line = { x1: 0, y1: 0, x2: 2, y2: 0 }
  const expectedResult = 3

  const result = getLineLength(line)

  expect(result).toBe(expectedResult)
})

test('getLineLengths of single line', () => {
  const lines: Line[] = [
    { x1: 0, y1: 0, x2: 2, y2: 0 },
  ]
  const expectedResult = 3

  const result = getLineLengths(lines)

  expect(result).toBe(expectedResult)
})

test('getLineLengths of multiple lines', () => {
  const lines: Line[] = [
    { x1: 0, y1: 0, x2: 2, y2: 0 },
    { x1: 2, y1: 0, x2: 2, y2: 1 },
  ]
  const expectedResult = 5

  const result = getLineLengths(lines)

  expect(result).toBe(expectedResult)
})
