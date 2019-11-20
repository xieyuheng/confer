const nanoid = require("nanoid")

class talk_t {
  constructor (the) {
    this.id = nanoid()
    this.name = the.name
    this.date = the.date
    this.topics = the.topics
    this.description = the.description
  }
}

console.log(new talk_t({
  name: "cicada language",
  date: 1234,
  topics: ["programming-language", "type-theory"],
  description: "cicada language underground",
}))

module.exports = {
  talk_t
}
