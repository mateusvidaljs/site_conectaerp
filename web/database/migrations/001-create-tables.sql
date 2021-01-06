-- Up
CREATE TABLE IF NOT EXISTS page_home (
  page_id INTEGER PRIMARY KEY,
  main_title TEXT NOT NULL,
  main_resume TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cases (
  case_id INTEGER PRIMARY KEY,
  image_path TEXT NOT NULL,
  name TEXT NOT NULL,
  resume TEXT
);

-- Down