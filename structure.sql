-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = 'WarUniques'
)
CREATE DATABASE WarUniques
GO


CREATE TABLE users(
    id_user INT  ,
    user_name VARCHAR(45),
    user_lastname VARCHAR(45),
    user_email VARCHAR(45),
    user_password VARCHAR(45),
    user_image VARCHAR(45),
    CONSTRAINT fk FOREIGN KEY (sale)
    REFERENCES users
)

CREATE TABLE sale(
    id AUTO_INCREMENT  PRIMARY KEY,
    sale_id_user INT,
    sale_product_id_product INT,
    quntity INT,
    total DECIMAL(10),
    CONSTRAINT fk FOREIGN KEY (id_user)
    REFERENCES sale_id_user
)


CREATE TABLE product(
    id_product INT,
    product_name VARCHAR(45),
    prduct_desccription VARCHAR(45),
    product_price DECIMAL(10),
    product_image VARCHAR(45),
    country_id_country INT,
     CONSTRAINT fk FOREIGN KEY (country)
    REFERENCES id_product
)


CREATE TABLE country(
    id_country INT,
    country_name VARCHAR(45),
    country_image VARCHAR(45)
    CONSTRAINT fk FOREIGN KEY (product)
    REFERENCES country
)
