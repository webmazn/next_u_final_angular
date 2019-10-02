-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.13-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para nextu_final8_db
CREATE DATABASE IF NOT EXISTS `nextu_final8_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nextu_final8_db`;

-- Volcando estructura para tabla nextu_final8_db.nu_productos
CREATE TABLE IF NOT EXISTS `nu_productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(75) NOT NULL,
  `precio` decimal(16,4) NOT NULL,
  `disponibles` int(10) NOT NULL,
  `imagen` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla nextu_final8_db.nu_productos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `nu_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `nu_productos` ENABLE KEYS */;

-- Volcando estructura para tabla nextu_final8_db.nu_usuarios
CREATE TABLE IF NOT EXISTS `nu_usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(75) NOT NULL,
  `clave` longtext NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `fec_nacimiento` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla nextu_final8_db.nu_usuarios: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `nu_usuarios` DISABLE KEYS */;
INSERT INTO `nu_usuarios` (`id`, `email`, `clave`, `nombre`, `fec_nacimiento`) VALUES
	(1, 'maycol_630@hotmail.com', '$2a$10$D5xkoZjJOnl5s4YYyI.pEOblZRtO71fFA0C9QqmQUsfRsK0sb1lMS', 'Maycol Zambrano Nuñez', '1986-01-07'),
	(2, 'maycol630@gmail.com', '$2a$10$auaLWz6vT5JRwCvpqBY5I.0Im6kpXXehuYm.01yjOLnHZKxKVdPu2', 'Maycol Zambrano Nuñez', '1986-01-07');
/*!40000 ALTER TABLE `nu_usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
