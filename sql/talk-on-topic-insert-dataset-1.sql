INSERT INTO talk_on_topic(talk_id, person_id, topic_id)
VALUES
  ('cicada-language-lecture-1', 'xieyuheng', 'type-theory'),
  ('cicada-language-lecture-2', 'xieyuheng', 'type-theory')
ON CONFLICT (talk_id, person_id, topic_id)
DO NOTHING;
