INSERT INTO topic(topic_id, topic_name)
VALUES
  ('type-theory', 'Type Theory'),
  ('generative-art', 'Generative Art')
ON CONFLICT (topic_id)
DO UPDATE
SET topic_name = EXCLUDED.topic_name;
