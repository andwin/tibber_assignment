import express from 'express'
import config from './config'
import enterPath from './routes/enter_path'
import sequelize from './db'

const app = express()

app.use(express.json())

app.post('/tibber-developer-test/enter-path', enterPath)

const run = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to database')
  } catch (e: unknown) {
    console.error('Database setup failed:', e)
    process.exit(1)
  }

  app.listen(config.port, () => {
    console.log(`Running on port ${config.port} 🥳`)
  })
}

run()
