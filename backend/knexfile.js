require("dotenv").config();

module.exports = {
  development: {
    // client: "pg",
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
      // host: process.env.DB_HOST,
      // user: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
      // secret: process.env.JWT_SECRET,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
