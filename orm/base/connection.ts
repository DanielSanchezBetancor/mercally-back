import mysql, { Pool } from 'mysql2';

let pool: Pool;

const getConnection = () => {
	try {
		if (!pool) {
			pool = mysql.createPool({
				connectionLimit: 10,
				host: process.env.MYSQL_HOST_PORT,
				user: process.env.MYSQL_USER,
				password: process.env.MYSQL_PASS,
				database: process.env.MYSQL_DB,
				timezone: 'Z',
				ssl: { rejectUnauthorized: false }
			});
		}
		return pool.promise();
	} catch (err) {
		console.error('Error MySQL');
		throw new Error('Error to connect with MySQL');
	}
};

export { getConnection };
