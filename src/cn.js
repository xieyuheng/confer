const db = require('./db')

db.query('SELECT * FROM employee CROSS JOIN department;', [], (err, res) => {
  console.log(res.rows)
  db.end()
})
