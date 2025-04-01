import normalizeLine from './normalize_line'
import rotateLine from './rotate_line'
import Line from './types/line'

const getDuplicaticatePositionsForLines = (line1: Line, line2: Line): number => {
  line1 = normalizeLine(line1)
  line2 = normalizeLine(line2)

  const line1Horizontal = line1.y1 === line1.y2
  const line2Horizontal = line2.y1 === line2.y2

  if (line1Horizontal === line2Horizontal) {
    if (!line1Horizontal) {
      line1 = rotateLine(line1)
      line2 = rotateLine(line2)
    }

    if (line1.y1 !== line2.y1) {
      return 0
    }

    if (line1.x1 > line2.x2 || line1.x2 < line2.x1) {
      return 0
    }

    if (line1.x2 === line2.x1 || line1.x1 === line2.x2) {
      return 1
    }

    return Math.min(Math.abs(line1.x2 - line2.x1), Math.abs(line2.x2 - line1.x1))
  }

  if (!line1Horizontal) {
    line1 = rotateLine(line1)
    line2 = rotateLine(line2)
  }

  // Check crossing lines
  if (line1.x1 <= line2.x1 && line1.x2 >= line2.x2 && line1.y1 >= line2.y1 && line1.y2 <= line2.y2) {
    return 1
  }

  return 0
}

export default getDuplicaticatePositionsForLines
