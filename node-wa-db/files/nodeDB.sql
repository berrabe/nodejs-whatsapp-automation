/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS db_otpwhatsapp;
USE db_otpwhatsapp;


-- Dumping structure for table db_otpwhatsapp.chat
CREATE TABLE IF NOT EXISTS `chat` (
  `id_chat` int(11) NOT NULL AUTO_INCREMENT,
  `dari` varchar(50) DEFAULT NULL,
  `tujuan` varchar(50) DEFAULT NULL,
  `gambar` varchar(200) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `keterangan` varchar(5000) DEFAULT NULL,
  `waktu` varchar(200) DEFAULT NULL,
  `id_device` int(11) DEFAULT NULL,
  `mengirim` varchar(200) DEFAULT NULL,
  `terkirim` varchar(200) DEFAULT NULL,
  `dibaca` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_chat`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping structure for table db_otpwhatsapp.pesan
CREATE TABLE IF NOT EXISTS `pesan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` blob,
  `tp` varchar(100) DEFAULT NULL,
  `fr` varchar(100) DEFAULT NULL,
  `tu` varchar(100) DEFAULT NULL,
  `datetime` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
