const assert = require('assert')

const nanoid = require('nanoid')

const util = require('../src/util')
const db = require('../src/db')

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

    let row = await db
        .query("INSERT INTO department(department_id, department_name) VALUES ($1, $2) RETURNING *",
               [util.rand_nat(10000), "Xie-" + nanoid()])
        .then((res) => res.rows[0])
        .catch(e => console.error(e.stack))

    console.log(row)

  })()
}

{
  (async () => {

    await db.end()

  })()
}
