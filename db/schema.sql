-- Minimal schema for scaffolding (Sprint 1)
-- You will extend this in Sprint 2/3.

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  category VARCHAR(60),
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Optional seed data (safe for early demos)
INSERT INTO users (name, email, password_hash)
VALUES ('Demo User', 'demo@campuscycle.test', 'not-a-real-hash')
ON DUPLICATE KEY UPDATE email=email;

INSERT INTO listings (title, description, category, user_id)
VALUES ('Calculator', 'Scientific calculator available to borrow.', 'Study', 1);
