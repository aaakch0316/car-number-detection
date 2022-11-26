const mysql = require('mysql')
const dbconfig = require('../config/mysql.js')

module.exports = mysql.createConnection(dbconfig)