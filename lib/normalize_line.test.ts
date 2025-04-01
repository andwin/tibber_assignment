import { expect, test } from 'vitest'
import Line from './types/line'
import normalizeLine from './normalize_line'

test('normalize horizontal line', () => {
  const line: Line = { x1: 10, y1: 0, x2: 0, y2: 0 }
  const expectedResult: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }

  const result = normalizeLine(line)

  expect(result).toEqual(expectedResult)
})

test('normalize normalized horizontal line', () => {
  const line: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }
  const expectedResult: Line = { x1: 0, y1: 0, x2: 10, y2: 0 }

  const result = normalizeLine(line)

  expect(result).toEqual(expectedResult)
})

test('normalize vertical line', () => {
  const line: Line = { x1: 0, y1: 10, x2: 0, y2: 0 }
  const expectedResult: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }

  const result = normalizeLine(line)

  expect(result).toEqual(expectedResult)
})

test('normalize normalized vertical line', () => {
  const line: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }
  const expectedResult: Line = { x1: 0, y1: 0, x2: 0, y2: 10 }

  const result = normalizeLine(line)

  expect(result).toEqual(expectedResult)
})
