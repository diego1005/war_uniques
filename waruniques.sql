-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 19-08-2022 a las 17:36:35
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `waruniques`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy`
--

DROP TABLE IF EXISTS `buy`;
CREATE TABLE IF NOT EXISTS `buy` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `quntity` int(11) NOT NULL,
  `total` decimal(7,2) NOT NULL,
  `id_product` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy_product`
--

DROP TABLE IF EXISTS `buy_product`;
CREATE TABLE IF NOT EXISTS `buy_product` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_buy` tinyint(4) DEFAULT NULL,
  `id_product` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `country`
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `imageURL` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `country`
--

INSERT INTO `country` (`id`, `name`, `imageURL`) VALUES
(1, 'england', '/images/flags/england.png'),
(2, 'usa', '/images/flags/usa.png'),
(3, 'russia', '/images/flags/russia.png'),
(4, 'germany', '/images/flags/germany.png'),
(5, 'japan', '/images/flags/japan.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `shipping` tinyint(4) NOT NULL,
  `offer` tinyint(4) NOT NULL,
  `credit` varchar(3) NOT NULL,
  `imageURL` varchar(200) NOT NULL,
  `id_country` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_country` (`id_country`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `shipping`, `offer`, `credit`, `imageURL`, `id_country`, `created_at`, `updated_at`) VALUES
(1, 'Uniforme Sargento soviético', 'Uniforme soviético de alto rango, principal designación a la defensa de Stalingrado durante la inminente amenaza del eje.', '30000.00', 1, 0, 'No', '1658326259636_soviet_military_jacket_0.jpg', 3, NULL, NULL),
(2, 'Caja de municiones estadounidense', 'Caja de municiones, calibre .50, de los aliados abandonada en la playa de Omaha durante la megainvación en el día D.', '10000.00', 0, 1, 'No', '1658326504684_s-l300.jpg', 2, NULL, NULL),
(3, 'Stahl Helm (casco alemán)', 'Fue un casco de combate de acero introducido por el Ejército Imperial Alemán en 1916 durante la Primera Guerra Mundial para reemplazar al tradicional Pickelhaube de cuero endurecido, que no ofrecía una protección adecuada en la guerra de trincheras.', '10000.00', 0, 0, 'No', '1658326572550_61+gR1Nga8L._AC_UX385_.jpg', 4, NULL, NULL),
(4, 'Stahl Helm (casco alemán)', 'Fue un casco de combate de acero introducido por el Ejército Imperial Alemán en 1916 durante la Primera Guerra Mundial para reemplazar al tradicional Pickelhaube de cuero endurecido, que no ofrecía una protección adecuada en la guerra de trincheras.', '12000.00', 0, 1, 'No', '1658326785029_61+gR1Nga8L._AC_UX385_.jpg', 4, NULL, NULL),
(5, 'Machete Plegable Paracaidista Y Piloto Ingles ww2 Sable.', 'Machete plegable de mano, utilizado por el vidicón aéreo real inglesa (RAE).', '30000.00', 0, 1, 'No', '1658326865012_D_NQ_NP_713211-MLA20504133904_112015-V.jpg', 1, NULL, NULL),
(6, 'Casco de medico de guerra', 'Casco de medico de combate, hallado en Europa, perteneció a una división destinada al combate de las Ardenas.', '20000.00', 1, 0, 'No', '1658327267693_58759813-objetos-de-interÃ©s-militar-estadounidense-de-la-segunda-guerra-mundial.webp', 2, NULL, NULL),
(7, 'Linterna antorcha de señal de Metal', 'Linterna de equipamiento estándar de la Wehrmacht(armada alemana), hallada en las cercanías de Berlín.', '10000.00', 1, 0, 'No', '1658327424844_s-l500.jpg', 4, NULL, NULL),
(8, 'U.S. Navy Tipo A-9 artillero Guantes', 'Guante de artillero, división A-9, grupo U.S. Navy SEAL, destinado a la guerra del Pacifico.', '6200.00', 1, 0, 'No', '1658327632387_s-l500 (1).jpg', 2, NULL, NULL),
(9, 'M1 Garand cabestrillo rifle M1907 Cuero', 'Cabestrillo para el rifle estándar de la armada Estadounidense (M1 Garand). Hallado en las playas de Omaha, costa Francesa.', '3500.00', 0, 1, 'No', '1658327846270_s-l225.webp', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sell`
--

DROP TABLE IF EXISTS `sell`;
CREATE TABLE IF NOT EXISTS `sell` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `quntity` int(11) NOT NULL,
  `total` decimal(7,2) NOT NULL,
  `id_product` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sell_product`
--

DROP TABLE IF EXISTS `sell_product`;
CREATE TABLE IF NOT EXISTS `sell_product` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_sell` tinyint(4) DEFAULT NULL,
  `id_product` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `imageURL` varchar(200) NOT NULL,
  `id_sell` tinyint(4) DEFAULT NULL,
  `id_buy` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sell` (`id_sell`),
  KEY `id_buy` (`id_buy`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `imageURL`, `id_sell`, `id_buy`) VALUES
(1, 'Juan Alberto', 'Perez', 'juan_perez@user.com', '$2a$10$5RQJ7ZJWwvADjV1rBgMm8emkm9lHKptE8j9d6in5zIpdiCnUDIRES', '1659976791738-img.png', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
