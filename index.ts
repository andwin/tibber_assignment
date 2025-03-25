import express from 'express'
import config from './config'
import enterPath from './routes/enter_path'

export const app = express()

app.listen(config.port, () => {
  console.log(`Running on port ${config.port} 🥳`)
})
app.use(express.json())

app.post('/tibber-developer-test/enter-path', enterPath)
