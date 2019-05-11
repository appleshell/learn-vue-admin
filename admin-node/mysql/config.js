const Client = require('mysql-pro')
const client = new Client({
  mysql: {
    user: 'root',
    password: 'root',
    database: 'student',
    host: '127.0.0.1'
  }
})

// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'student'
// })
module.exports = client
// module.exports = connection;
