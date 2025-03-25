import Position from '../types/position'
import Command from '../types/command'

const processCommands = (start: Position, commands: Command[]): number => {
  const visitedPositions = new Set<string>()

  const position: Position = { ...start }
  visitedPositions.add(`${position.x},${position.y}`)

  for (const command of commands) {
    for (let i = 0; i < command.steps; i++) {
      switch (command.direction) {
        case 'north':
          position.y++
          break
        case 'south':
          position.y--
          break
        case 'east':
          position.x++
          break
        case 'west':
          position.x--
          break
        default:
          throw new Error(`Invalid direction: ${command.direction}`)
      }

      visitedPositions.add(`${position.x},${position.y}`)
    }
  }

  return visitedPositions.size
}

export default processCommands
