const db = require('../src/db')

const table = require('./table')

table.init({
  create: 'topic-create.sql',
  insert: 'topic-insert-dataset-1.sql',
  select: 'topic-select.sql',
}).finally(() => db.end())
