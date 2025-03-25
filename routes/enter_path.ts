import { type Request, type Response } from 'express'
import Position from '../types/position'
import Command from '../types/command'
import processCommands from '../lib/process_commands'

type Body = {
  start: Position
  commands: Command[]
}

const enterPath = async (request: Request, response: Response) => {
  const { start, commands } = request.body as Body

  const result = processCommands(start, commands)

  response.send({ start, commands, result })
}

export default enterPath
