 CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   image TEXT DEFAULT 'http://via.placeholder.com/250x250',
   role VARCHAR(255) DEFAULT 'user'
 );

 CREATE TABLE quote(
   id SERIAL PRIMARY KEY,
   users_id INT REFERENCES users(id),
   author VARCHAR(255) NOT NULL,
   quote TEXT,
   submitted TIMESTAMP DEFAULT now(),
   likes BOOLEAN default false
 );
