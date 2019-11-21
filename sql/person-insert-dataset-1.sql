INSERT INTO person(person_id, person_name)
VALUES
  ('xieyuheng', 'Xie Yuheng'),
  ('arachnia', 'ɑɾɑchnɪɑ')
ON CONFLICT (person_id)
DO UPDATE SET
  person_name = EXCLUDED.person_name;
