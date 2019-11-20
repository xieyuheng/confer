const uuid = require("../uuid")

class talk_t {
  constructor(the) {
    this.id = uuid.gen()
    this.name = the.name
    this.date = the.date
    this.description = the.description
  }
}

class talk_on_topic_t {
  constructor(the) {
    this.id = uuid.gen()
    this.talk_id = the.talk_id
    this.topic_id = the.topic_id
  }
}

class talk_by_user_t {
  constructor(the) {
    this.id = uuid.gen()
    this.talk_id = the.talk_id
    this.user_id = the.user_id
  }
}

{
  let talk = new talk_t({
    name: "cicada language",
    date: 1234,
    description: "cicada language underground #1",
  })

  console.log(talk)

  console.log(new talk_on_topic_t({
    talk_id: talk.id,
    topic_id: "programming-language",
  }))

  console.log(new talk_by_user_t({
    talk_id: talk.id,
    user_id: "xieyuheng",
  }))
}

module.exports = {
  talk_t
}
