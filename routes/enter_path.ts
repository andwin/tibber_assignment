import { type Request, type Response } from 'express'
import Position from '../types/position'
import Command from '../types/command'

type Body = {
  start: Position
  commands: Command[]
}

const enterPath = async (request: Request, response: Response) => {
  const { start, commands } = request.body as Body

  response.send({ start, commands })
}

export default enterPath
