const { MongoClient } = require('mongodb');

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

let db = null;

const connection = () => {
	return db
		? Promise.resolve(db)
		: MongoClient.connect(process.env.MONGO_DB_URL, OPTIONS)
			.then((conn) => {
				db = conn.db(process.env.DB_DATABASE);
				return db;
			})
};

module.exports = connection;