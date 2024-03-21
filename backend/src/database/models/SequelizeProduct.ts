import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import db from '.';

class SequelizeProduct extends Model<
    InferAttributes<SequelizeProduct>, InferCreationAttributes<SequelizeProduct>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: string;
    declare price: number;
    declare quantity: number;
}

SequelizeProduct.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
}, {
    sequelize: db,
    modelName: 'products',
    timestamps: false,
})

export default SequelizeProduct;