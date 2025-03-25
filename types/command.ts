export type Direction = 'east' | 'west' | 'north' | 'south'

type Command = {
  direction: Direction
  steps: number
}

export default Command
