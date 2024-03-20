const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: 'db',
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};