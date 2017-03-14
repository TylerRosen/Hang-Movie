CREATE DATABASE hangman_db;

USE hangman_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username varchar(230) NOT NULL,
    email varchar(230) NOT NULL,
    password_hash varchar(230) NOT NULL,
);

CREATE TABLE scores (
    id INT AUTO_INCREMENT NOT NULL,
    
)
