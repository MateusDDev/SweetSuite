import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model } from 'sequelize';
import db from '.';

class SequelizeUser extends Model<
InferAttributes<SequelizeUser>, InferCreationAttributes<SequelizeUser>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare password: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default SequelizeUser;
