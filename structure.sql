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
    id_user INT PRIMARY KEY ,
    user_name VARCHAR(45),
    user_lastname VARCHAR(45),
    user_email VARCHAR(45),
    user_password VARCHAR(45),
    user_image VARCHAR(45),
    CONSTRAINT fk FOREIGN KEY (sale)
    REFERENCES users
)

CREATE TABLE sale(
    id AUTO_INCREMENT PRIMARY KEY,
    sale_id_user INT,
    sale_product_id_product INT,
    quntity INT,
    total DECIMAL(10),
    CONSTRAINT fk FOREIGN KEY (id_user)
    REFERENCES sale_id_user
)


CREATE TABLE product (
    id TINYINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    shipping TINYINT NOT NULL,
    offer TINYINT NOT NULL,
    credit VARCHAR(3) NOT NULL,
    imageURL VARCHAR(200) NOT NULL,
    id_country TINYINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (id_country) REFERENCES country(id)
);

CREATE TABLE country (
    id TINYINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    imageURL VARCHAR(200) NOT NULL
)

CREATE TABLE user_sale(
    id_user_sale INT PRIMARY KEY,
     id_user INT,
      id_sale INT,

)

CREATE TABLE sale_product(
    id_sale_product INT PRIMARY KEY,
    id_sale INT,
    id_product INT,

)

insert into country (name, imageURL) values('england', '/images/flags/england.png');
insert into country (name, imageURL) values('usa', '/images/flags/usa.png');
insert into country (name, imageURL) values('russia', '/images/flags/russia.png');
insert into country (name, imageURL) values('germany', '/images/flags/germany.png');
insert into country (name, imageURL) values('japan', '/images/flags/japan.png');

INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Uniforme Sargento soviético','Uniforme soviético de alto rango, principal designación a la defensa de Stalingrado durante la inminente amenaza del eje.',30000,1,0,'No','1658326259636_soviet_military_jacket_0.jpg',3);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Caja de municiones estadounidense','Caja de municiones, calibre .50, de los aliados abandonada en la playa de Omaha durante la megainvación en el día D.',10000,0,1,'No','1658326504684_s-l300.jpg',2);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Stahl Helm (casco alemán)','Fue un casco de combate de acero introducido por el Ejército Imperial Alemán en 1916 durante la Primera Guerra Mundial para reemplazar al tradicional Pickelhaube de cuero endurecido, que no ofrecía una protección adecuada en la guerra de trincheras.',10000,0,0,'No','1658326572550_61+gR1Nga8L._AC_UX385_.jpg',4);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Stahl Helm (casco alemán)','Fue un casco de combate de acero introducido por el Ejército Imperial Alemán en 1916 durante la Primera Guerra Mundial para reemplazar al tradicional Pickelhaube de cuero endurecido, que no ofrecía una protección adecuada en la guerra de trincheras.',12000,0,1,'No','1658326785029_61+gR1Nga8L._AC_UX385_.jpg',4);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Machete Plegable Paracaidista Y Piloto Ingles ww2 Sable.','Machete plegable de mano, utilizado por el vidicón aéreo real inglesa (RAE).',30000,0,1,'No','1658326865012_D_NQ_NP_713211-MLA20504133904_112015-V.jpg',1);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Casco de medico de guerra','Casco de medico de combate, hallado en Europa, perteneció a una división destinada al combate de las Ardenas.',20000,1,0,'No','1658327267693_58759813-objetos-de-interÃ©s-militar-estadounidense-de-la-segunda-guerra-mundial.webp',2);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('Linterna antorcha de señal de Metal','Linterna de equipamiento estándar de la Wehrmacht(armada alemana), hallada en las cercanías de Berlín.',10000,1,0,'No','1658327424844_s-l500.jpg',4);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('U.S. Navy Tipo A-9 artillero Guantes','Guante de artillero, división A-9, grupo U.S. Navy SEAL, destinado a la guerra del Pacifico.',6200,1,0,'No','1658327632387_s-l500 (1).jpg',2);
INSERT INTO product(name,description,price,shipping,offer,credit,imageURL,id_country) VALUES ('M1 Garand cabestrillo rifle M1907 Cuero','Cabestrillo para el rifle estándar de la armada Estadounidense (M1 Garand). Hallado en las playas de Omaha, costa Francesa.',3500,0,1,'No','1658327846270_s-l225.webp',2);