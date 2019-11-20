const { Pool, Client } = require('pg')

const pool = new Pool()

pool.query('SELECT * FROM employee CROSS JOIN department;', (err, res) => {
  console.log(err, res.rows)
  pool.end()
})
