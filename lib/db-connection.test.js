const assert = require('assert')

const nanoid = require('nanoid')

const db = require('./db')

{
  (async () => {

    let row = await db
        .query('SELECT NOW()')
        .then((res) => res.rows[0])
        .catch(e => console.error(e.stack))

    assert(row.now instanceof Date)

  })()
}

{
  (async () => {

    await db.end()

  })()
}
