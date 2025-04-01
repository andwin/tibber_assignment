import Line from './types/line'

const normalizeLine = (line: Line): Line => {
  const line1Horizontal = line.y1 === line.y2

  if (line1Horizontal) {
    if (line.x1 > line.x2) {
      return { x1: line.x2, y1: line.y2, x2: line.x1, y2: line.y1 }
    }
  }

  if (line.y1 > line.y2) {
    return { x1: line.x2, y1: line.y2, x2: line.x1, y2: line.y1 }
  }

  return line
}

export default normalizeLine
