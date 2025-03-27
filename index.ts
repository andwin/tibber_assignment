import express from 'express'
import config from './config'
import enterPath from './routes/enter_path'
import sequelize from './db'
import logger from './lib/logger'

export const app = express()

app.use(express.json())

app.post('/tibber-developer-test/enter-path', enterPath)

const run = async () => {
  try {
    await sequelize.authenticate()
    logger.info('Connected to database')

    await sequelize.sync()
    logger.info('Database synchronized')
  } catch (e: unknown) {
    logger.error(`Database setup failed: ${e}`)
    process.exit(1)
  }

  app.listen(config.port, () => {
    logger.info(`Running on port ${config.port} 🥳`)
  })
}

run()
