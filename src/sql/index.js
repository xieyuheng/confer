const fs = require('fs')

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

// wait(3 * 1000)
//   .then(() => console.log("3 seconds"))
//   .catch(e => console.error(e.stack))

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, text) => {
      console.log(err)
      if (err !== null) {
        reject(err)
      } else {
        resolve(text)
      }
    })
  })
}

module.exports = {
  wait,
  read,
}
