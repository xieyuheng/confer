"use strict"

const ms = require("ms")

const env = require("./src/env.js")
// const db = require("./src/db.js")
const app = require("./src/app.js")

// setInterval(() => {
//   db.cleanUp()
// }, ms("1 min"))

app.listen(env.port, () => {
  console.log("Listening on port %s", env.port)
})
