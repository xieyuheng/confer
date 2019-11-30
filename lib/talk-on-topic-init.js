const db = require('./db')

const table = require('./table')

table.init({
  create: 'talk-on-topic-create.sql',
  insert: 'talk-on-topic-insert-dataset-1.sql',
  select: 'talk-on-topic-select.sql',
}).finally(() => db.end())
