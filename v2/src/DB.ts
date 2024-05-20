import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'devseok.com',
    user: 'daily_alarm',
    database: 'daily_alarm',
    password: process.env.DB_PW
});