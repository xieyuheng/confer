class talk_t {
  constructor(the) {
    this.talk_id = the.talk_id
    this.talk_name = the.talk_name
    this.talk_description = the.talk_description
    this.user_id = the.user_id
  }
}

class talk_on_topic_t {
  constructor(the) {
    this.talk_id = the.talk_id
    this.topic_id = the.topic_id
  }
}

{
  let talk = new talk_t({
    talk_id: 'cicada-language-1',
    talk_name: 'cicada language',
    talk_description: 'cicada language underground #1',
    user_id: 'xieyuheng',
  })

  console.log(talk)

  console.log(new talk_on_topic_t({
    talk_id: talk.id,
    topic_id: 'programming-language',
  }))
}

module.exports = {
  talk_t
}
