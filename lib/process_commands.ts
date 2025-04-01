import Position from '../types/position'
import Command from '../types/command'
import Line from './types/line'
import getDuplicatePositions from './duplicate_positions'
import { getLineLengths } from './line_length'

const processCommands = (start: Position, commands: Command[]): number => {
  if (commands.length === 0) {
    return 1
  }

  const lines: Line[] = []
  let duplicatePositions = 0

  let position: Position = { ...start }

  for (const command of commands) {
    const { line, newPosition } = processLine(position, command)

    const newPuplicatePositions = getDuplicatePositions(line, lines)
    duplicatePositions += newPuplicatePositions

    lines.push(line)
    position = { ...newPosition }
  }

  const lineLengths = getLineLengths(lines)

  return lineLengths - duplicatePositions
}

type ProcessLineResult = { line: Line; newPosition: Position }
const processLine = (start: Position, command: Command): ProcessLineResult => {
  const line = { x1: start.x, y1: start.y, x2: start.x, y2: start.y }

  switch (command.direction) {
    case 'north':
      line.y2 += command.steps
      break
    case 'south':
      line.y2 -= command.steps
      break
    case 'east':
      line.x2 += command.steps
      break
    case 'west':
      line.x2 -= command.steps
      break
    default:
      throw new Error(`Invalid direction: ${command.direction}`)
  }

  return { line, newPosition: { x: line.x2, y: line.y2 } }
}

export default processCommands
