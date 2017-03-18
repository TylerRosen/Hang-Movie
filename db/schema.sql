CREATE DATABASE hangman_db;

USE hangman_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username varchar(230) NOT NULL,
    email varchar(230) NOT NULL,
    password_hash varchar(230) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE scores (
    id int NOT NULL AUTO_INCREMENT,
	total_score INT NOT NULL,
	user_id INT NOT NULL, 
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) references users(id)
    
);
