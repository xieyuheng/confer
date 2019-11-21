const fs = require('fs')

const db = require('../src/db')
const sql = require('../src/sql')

// {
//   sql.read(__dirname + '/../src/models/person-create.sql')
//     .then(text => db.query(text)
//           .then((res) => res.rows[0])
//           .catch(e => console.error(e.stack))
//           .finally(db.end()))
//     .catch(e => console.error(e.stack))
// }

// {
//   sql.read(__dirname + '/../src/models/person-insert-frineds.sql')
//     .then(text => db.query(text)
//           .then((res) => res.rows[0])
//           .catch(e => console.error(e.stack))
//           .finally(db.end()))
//     .catch(e => console.error(e.stack))
// }

{
  sql.read(__dirname + '/../src/models/persons.sql')
    .then(text => db.query(text)
          .then((res) => console.log(res.rows))
          .catch(e => console.error(e.stack))
          .finally(db.end()))
    .catch(e => console.error(e.stack))
}

{
  (async () => {

    let text = await sql.read(__dirname + '/../src/models/persons.sql')
    let res = await db.query(text)
    console.log(res.rows)

  })()
}
