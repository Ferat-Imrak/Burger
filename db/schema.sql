CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (250) NOT NULL,
    devoured TINYINT(1),
    PRIMARY KEY (id)
);