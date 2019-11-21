const assert = require('assert')

const db = require('../src/db')

{
  (async () => {

    let row = await db
        .query('SELECT NOW()')
        .then((res) => res.rows[0])
        .catch(e => console.error(e.stack))

    await db.end()

    assert(row.now instanceof Date)

  })()
}
