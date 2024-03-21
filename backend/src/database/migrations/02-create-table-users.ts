import { QueryInterface, Model, DataTypes } from 'sequelize';
import { IUser } from 'src/interfaces/users/IUser';


export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IUser>>('users', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
    },

    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('users');
    },
};
