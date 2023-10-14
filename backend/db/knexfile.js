// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "mysql",
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "migrations/./",
		},
		seeds: {
			directory: "seeds/./",
		},
	},
};
