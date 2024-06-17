import { QueryInterface } from 'sequelize';
import * as bcrypt from 'bcryptjs'

export default {
  up: async (queryInterface: QueryInterface) => {
    const users = [
      { id: 1, username: "user1", password: await bcrypt.hash("password1", 10) },
      { id: 2, username: "user2", password: await bcrypt.hash("password2", 10) },
      { id: 3, username: "user3", password: await bcrypt.hash("password3", 10) },
      { id: 4, username: "user4", password: await bcrypt.hash("password4", 10) },
      { id: 5, username: "user5", password: await bcrypt.hash("password5", 10) },
      { id: 6, username: "user6", password: await bcrypt.hash("password6", 10) },
      { id: 7, username: "user7", password: await bcrypt.hash("password7", 10) },
      { id: 8, username: "user8", password: await bcrypt.hash("password8", 10) },
      { id: 9, username: "user9", password: await bcrypt.hash("password9", 10) },
      { id: 10, username: "user10", password: await bcrypt.hash("password10", 10) }
    ];

    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
