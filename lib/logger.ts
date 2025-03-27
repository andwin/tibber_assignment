import pino, { LoggerOptions } from 'pino'

const options: LoggerOptions = {
  base: undefined,
}
const logger = pino(options)

export default logger
