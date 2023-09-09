const path = require('path')
const ambient = require(path.resolve("ambient.js"))

module.exports = {
  "username": ambient.DBNAME,
  "password": ambient.DBPASS,
  "database": ambient.DBNAME,
  "host": ambient.DBHOST,
  "port": ambient.DBPORT,
  "dialect": ambient.DBDIALECT,
}