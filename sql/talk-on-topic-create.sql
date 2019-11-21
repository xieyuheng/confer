CREATE TABLE IF NOT EXISTS talk_on_topic(
  talk_id TEXT,
  person_id TEXT,
  topic_id TEXT,
  PRIMARY KEY (talk_id, person_id, topic_id),
  FOREIGN KEY (talk_id, person_id) REFERENCES talk);
