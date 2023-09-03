require('dotenv').config();

const development = {
  "username": process.env.DBUSER,
  "password": process.env.DBPASS,
  "database": "mbo-db",
  "host": process.env.DBHOST,
  "port":3306,
  "dialect": "mysql"
}

const production = {
  "username": process.env.DBUSER,
  "password": process.env.DBPASS,
  "database": process.env.DBNAME,
  "host": process.env.DBHOST,
  "port": process.env.DBPORT,
  "dialect": process.env.DBDIALECT
}

module.exports = {development,production}