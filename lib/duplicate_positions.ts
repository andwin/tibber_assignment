import duplicaticatePositionsForLines from './duplicate_positions_for_lines'
import Line from './types/line'

const duplicatePositions = (line: Line, lines: Line[]): number => {
  return lines.reduce((acc, l) => {
    return acc + duplicaticatePositionsForLines(line, l)
  }, 0)
}

export default duplicatePositions
