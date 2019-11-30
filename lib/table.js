const db = require('./db')

async function init(the) {
  await db.sql(the.create)
  await db.sql(the.insert)
  let res = await db.sql(the.select)
  console.log(res.rows)
}

module.exports = {
  init,
}
