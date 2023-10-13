// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "mysql",
		connection: {
			host: "localhost",
			user: "root",
			password: "rootroot",
			database: "QuestBuddy",
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
