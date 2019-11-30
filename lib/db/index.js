const fs = require('fs')

const { Pool } = require('pg')

const pool = new Pool()

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function read_file(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, text) => {
      err ? reject(err) : resolve(text)
    })
  })
}

function query(text, params) {
  return pool.query(text, params)
}

function end() {
  pool.end()
}

const SQL_ROOT = __dirname + '/../../sql/'

function sql(path, params) {
  return read_file(SQL_ROOT + path)
    .then(text => query(text, params))
}

module.exports = {
  wait,
  read_file,

  query,
  end,

  SQL_ROOT,
  sql,
}
