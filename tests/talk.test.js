const assert = require('assert')

const {
  talk_t,
  talk_on_topic_t,
} = require('../src/models/talk')

let talk = new talk_t({
  talk_id: 'cicada-language-1',
  talk_name: 'cicada language',
  talk_description: 'cicada language underground #1',
  user_id: 'xieyuheng',
})

console.log(talk)

console.log(new talk_on_topic_t({
  ...talk,
  topic_id: 'programming-language',
}))
