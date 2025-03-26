import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from '@sequelize/core'
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy'

@Table({
  timestamps: false,
})
class Execution extends Model<InferAttributes<Execution>, InferCreationAttributes<Execution>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>

  @Attribute(DataTypes.DATE)
  @NotNull
  declare timestamp: CreationOptional<Date>

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare commands: number

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare result: number

  @Attribute(DataTypes.FLOAT)
  @NotNull
  declare duration: number
}

export default Execution
