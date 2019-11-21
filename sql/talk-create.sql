CREATE TABLE IF NOT EXISTS talk(
  talk_id TEXT,
  talk_name TEXT,
  talk_description TEXT,
  person_id TEXT REFERENCES person,
  PRIMARY KEY (talk_id, person_id));
