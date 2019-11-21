INSERT INTO talk(talk_id, talk_name, talk_description, person_id)
VALUES
  ('cicada-language-lecture-1', 'Cicada Language Lecture 1', 'Basic', 'xieyuheng'),
  ('cicada-language-lecture-2', 'Cicada Language Lecture 2', 'Fulfilling type system', 'xieyuheng')
ON CONFLICT (talk_id, person_id)
DO UPDATE SET
  talk_name = EXCLUDED.talk_name,
  talk_description = EXCLUDED.talk_description;
