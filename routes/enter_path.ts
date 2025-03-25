import { type Request, type Response } from 'express'

const enterPath = async (_: Request, response: Response) => {
  response.send({ json: true })
}

export default enterPath
