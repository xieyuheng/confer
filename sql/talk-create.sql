CREATE TABLE IF NOT EXISTS talk(
  talk_id TEXT PRIMARY KEY,
  talk_name TEXT,
  talk_description TEXT,
  person_id TEXT REFERENCES person);
