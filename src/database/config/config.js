require('dotenv').config();

const development = {
  "username": process.env.DBUSER,
  "password": process.env.DBPASS,
  "database": process.env.DBNAME,
  "host": process.env.DBHOST,
  "port":3306,
  "dialect": "mysql"
}

const production = {
  "username": process.env.DBUSER,
  "password": process.env.DBPASS,
  "database": process.env.DBNAME,
  "host": process.env.DBHOST,
  "port":3306,
  "dialect": "mysql"
}

module.exports = {development,production}