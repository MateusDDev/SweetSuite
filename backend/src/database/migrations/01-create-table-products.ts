import { QueryInterface, Model, DataTypes } from 'sequelize';
import { IProduct } from '../../interfaces/products/IProduct';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProduct>>('products', {
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
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};
