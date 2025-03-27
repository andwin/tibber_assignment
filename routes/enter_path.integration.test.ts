import request from 'supertest'
import { beforeAll, describe, expect, it } from 'vitest'
import { app } from '..'
import Position from '../types/position'
import Command from '../types/command'
import sequelize from '../db'

describe('Enter path route', () => {
  beforeAll(async () => {
    await sequelize.authenticate()
  })

  it('should return 200', async () => {
    const start: Position = { x: 10, y: 22 }
    const commands: Command[] = [
      { direction: 'east', steps: 2 },
      { direction: 'north', steps: 1 },
    ]
    const expectedCommands = 2
    const expectedResult = 4

    const response = await request(app)
      .post('/tibber-developer-test/enter-path')
      .send({ start, commands })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result')
    expect(response.body.result).toBe(expectedResult)
    expect(response.body).toHaveProperty('duration')
    expect(response.body.duration).toBeGreaterThan(0)
    expect(response.body).toHaveProperty('commands')
    expect(response.body.commands).toBe(expectedCommands)
    expect(response.body).toHaveProperty('timestamp')
  })
})
