const db = require('./db')

const table = require('./table')

table.init({
  create: 'person-create.sql',
  insert: 'person-insert-dataset-1.sql',
  select: 'person-select.sql',
}).finally(() => db.end())
