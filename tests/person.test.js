const fs = require('fs')

const db = require('../src/db')
const sql = require('../src/sql')

let create = sql.read(__dirname + '/../src/models/person-create.sql')
    .then(text => {
      return db.query(text)
        .then((res) => res.rows[0])
    })

let insert = sql.read(__dirname + '/../src/models/person-insert-frineds.sql')
    .then(text => {
      return db.query(text)
        .then((res) => res.rows[0])
    })


let select = sql.read(__dirname + '/../src/models/person-select.sql')
    .then(text => {
      return db.query(text)
        .then((res) => console.log(res.rows))
    })

Promise.all([create, insert, select])
  .catch(e => console.error(e.stack))
  .finally(() => db.end())
