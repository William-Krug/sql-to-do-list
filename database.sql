-- Delete table
DROP TABLE "tasks";

-- Make a table called "tasks"
CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(1024) NOT NULL,
  "notes" VARCHAR(2048),
  "toDo" BOOLEAN DEFAULT TRUE,
  "inProgress" BOOLEAN DEFAULT FALSE,
  "completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks"
  ("name", "notes")
VALUES
  ('Buy Birthday Presents', 'Yoga Mat, Coffee Mug'),
  ('Groceries', 'Milk, Bread, Captian Crunch');

INSERT INTO "tasks"
  ("name", "notes", "toDo", "inProgress")
VALUES
  ('Prime Digitial Academy', 'Full stack BANANA yeah!', FALSE, TRUE);

INSERT INTO "tasks"
  ("name", "notes", "toDo", "completed")
VALUES
  ('Jigsaw Puzzle', '32,000 piece New York Skyline', FALSE, TRUE);