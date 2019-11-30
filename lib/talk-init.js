const db = require('./db')

const table = require('./table')

table.init({
  create: 'talk-create.sql',
  insert: 'talk-insert-dataset-1.sql',
  select: 'talk-select.sql',
}).finally(() => db.end())
