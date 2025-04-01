import Line from './types/line'

export const getLineLengths = (lines: Line[]): number => {
  return lines.reduce((acc, line) => {
    return acc + getLineLength(line)
  }, 0)
}

export const getLineLength = (line: Line): number => {
  return Math.abs(line.x2 - line.x1) + Math.abs(line.y2 - line.y1) + 1
}
