### Schema

CREATE DATABASE jf6d1s2tl73qrbb3;
USE jf6d1s2tl73qrbb3;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
