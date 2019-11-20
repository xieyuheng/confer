const test = require('ava')

const db = require('../src/db')

test("db.query", async t => {

  let row = await db
      .query('SELECT NOW()')
      .then((res) => res.rows[0])
      .catch(e => console.error(e.stack))

  t.true(row.now instanceof Date)

  t.pass()
})
