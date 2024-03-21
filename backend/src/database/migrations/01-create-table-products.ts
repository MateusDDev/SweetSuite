import { QueryInterface, Model, DataTypes } from 'sequelize';
import { IProduct } from 'src/interfaces/products/IProduct';

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
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};
