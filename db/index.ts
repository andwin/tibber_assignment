import { Sequelize, Options } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'

import Execution from './models/execution'

import config from '../config'

const options: Options<PostgresDialect> = {
  dialect: PostgresDialect,
  url: config.databaseUrl,
  models: [
    Execution,
  ],
}
const sequelize = new Sequelize(options)

export { Execution }
export default sequelize
