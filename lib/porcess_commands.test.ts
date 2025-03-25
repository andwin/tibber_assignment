import { expect, test } from 'vitest'
import processCommands from './process_commands'
import Position from '../types/position'
import Command, { Direction } from '../types/command'

test('processCommands', () => {
  const start: Position = { x: 10, y: 22 }
  const commands: Command[] = [
    { direction: 'east', steps: 2 },
    { direction: 'north', steps: 1 },
  ]
  const expectedResult = 4

  const result = processCommands(start, commands)

  expect(result).toBe(expectedResult)
})

test('Should return 1 when commands is empty', () => {
  const start: Position = { x: 10, y: 22 }
  const commands: Command[] = []
  const expectedResult = 1

  const result = processCommands(start, commands)

  expect(result).toBe(expectedResult)
})

test('Should only count each coordinate once', () => {
  const start: Position = { x: 10, y: 22 }
  const commands: Command[] = [
    { direction: 'east', steps: 2 },
    { direction: 'north', steps: 1 },
    { direction: 'south', steps: 1 },
    { direction: 'west', steps: 3 },
  ]
  const expectedResult = 5

  const result = processCommands(start, commands)

  expect(result).toBe(expectedResult)
})

test('Should throw error when direction is invalid', () => {
  const start: Position = { x: 10, y: 22 }
  const commands: Command[] = [
    { direction: 'east', steps: 2 },
    { direction: 'invalid' as Direction, steps: 1 },
  ]

  expect(() => processCommands(start, commands)).toThrow('Invalid direction: invalid')
})
