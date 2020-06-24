  
-- drop database if exists, create database
DROP DATABASE DB_DATABASE;

CREATE DATABASE DB_DATABASE;

-- create a table called tasks
CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    github_url VARCHAR(255) NOT NULL,
    demo_url VARCHAR(255)
);

-- insert mock data and display
INSERT INTO projects
(title, description, github_url, demo_url) 
VALUES
('Gatsby Portfolio', 'My portfolio built on Gatsby + Express.', 'https://github.com/vpvnguyen/portfolio-gatsby', 'http://localhost:8000');

SELECT * FROM projects;