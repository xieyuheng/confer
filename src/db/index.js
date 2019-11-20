const { Pool } = require('pg')

const pool = new Pool()

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  end: () => {
    pool.end()
  },
  get_client: (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done)
    })
  },
}
