class talk_t {
  constructor(the) {
    this.talk_id = the.talk_id
    this.talk_name = the.talk_name
    this.talk_description = the.talk_description
    this.person_id = the.person_id
  }
}

class talk_on_topic_t {
  constructor(the) {
    this.talk_id = the.talk_id
    this.person_id = the.person_id
    this.topic_id = the.topic_id
  }
}

module.exports = {
  talk_t,
  talk_on_topic_t,
}
