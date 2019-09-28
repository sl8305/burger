-- Creating burger database that has an id, name and boolean for eaten or not
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(300) NOT NULL,
    eaten BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);