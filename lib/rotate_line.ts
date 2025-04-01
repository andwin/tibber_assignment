import Line from './types/line'

const rotateLine = (line: Line): Line => {
  return {
    x1: line.y1,
    y1: line.x1,
    x2: line.y2,
    y2: line.x2,
  }
}

export default rotateLine
