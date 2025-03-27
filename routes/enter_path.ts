import { type Request, type Response } from 'express'
import { CreationAttributes } from '@sequelize/core'
import type Position from '../types/position'
import type Command from '../types/command'
import processCommands from '../lib/process_commands'
import { Execution } from '../db'

type Body = {
  start: Position
  commands: Command[]
}

const enterPath = async (request: Request, response: Response) => {
  const { start, commands } = request.body as Body

  const startTime = performance.now()

  const result = processCommands(start, commands)

  const endTime = performance.now()
  const durationInSeconds = (endTime - startTime) / 1000

  try {
    const data: CreationAttributes<Execution> = {
      timestamp: new Date(),
      commands: commands.length,
      result,
      duration: durationInSeconds,
    }
    const execution = await Execution.create(data)
    console.log('Execution created:', data)

    response.send(execution)
  } catch (e: unknown) {
    console.error('Failed to create execution:', e)
    response.status(500).send({ error: 'Failed to create execution' })
  }
}

export default enterPath
