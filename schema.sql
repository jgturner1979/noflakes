DROP DATABASE IF EXISTS profiles_db;
CREATE DATABASE profiles_db;

USE profiles_db;

CREATE TABLE Profiles(
    id INTEGER NOT NULL AUTO_INCREMENT,
    display_name VARCHAR(100) NOT NULL,
    username VARCHAR(500) NOT NULL,
    email VARCHAR(500) NOT NULL,
    password BINARY(60),
    user_age INTEGER NOT NULL,
    sexual_identity VARCHAR (20) NOT NULL,
    relationship_status VARCHAR (20) NOT NULL,
    looking_for VARCHAR(1000) NOT NULL,
    soc_quest1 INTEGER NOT NULL,
    soc_quest2 INTEGER NOT NULL,
    soc_quest3 INTEGER NOT NULL,
    soc_quest4 INTEGER NOT NULL,
    soc_quest5 INTEGER NOT NULL,
    soc_quest6 INTEGER NOT NULL,
    soc_quest7 INTEGER NOT NULL,
    soc_quest8 INTEGER NOT NULL,
    soc_quest9 INTEGER NOT NULL,
    soc_quest10 INTEGER NOT NULL,
    soc_quest11 INTEGER NOT NULL,
    soc_quest12 INTEGER NOT NULL,
    soc_quest13 INTEGER NOT NULL,
    soc_quest14 INTEGER NOT NULL,
    soc_quest15 INTEGER NOT NULL,
    social_scale INTEGER NOT NULL,
    -- profile_image VARCHAR(500) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

SELECT * FROM Profiles;