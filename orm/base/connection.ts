import mysql, { Pool } from 'mysql2';

let pool: Pool;

const getConnection = () => {
  try {
    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: getEnvVar('MYSQL_HOST_PORT'),
        user: getEnvVar('MYSQL_USER'),
        password: getEnvVar('MYSQL_PASS'),
        database: getEnvVar('MYSQL_DB'),
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
