-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

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

-- Dumping data for table db_otpwhatsapp.chat: ~11 rows (approximately)
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` (`id_chat`, `dari`, `tujuan`, `gambar`, `id_user`, `status`, `keterangan`, `waktu`, `id_device`, `mengirim`, `terkirim`, `dibaca`) VALUES
	(1, NULL, '62895361034833@c.us', NULL, NULL, NULL, 'Kode OTP anda \'3134\' jangan berikan nomor ini kesiapapun ', NULL, NULL, NULL, '1', NULL),
	(2, NULL, '62895361034833@c.us', NULL, NULL, NULL, 'test send pictures', NULL, NULL, NULL, '1', NULL),
	(3, NULL, '62895361034833@c.us', NULL, NULL, NULL, 'Kode OTP anda \'3134\' jangan berikan nomor ini kesiapapun ', NULL, NULL, NULL, '1', NULL),
	(4, NULL, '62895361034833@c.us', NULL, NULL, NULL, 'test send pictures', NULL, NULL, NULL, '1', NULL),
	(5, NULL, '62895361034833@c.us', NULL, NULL, NULL, 'Kode OTP anda \'313212\' jangan berikan nomor ini kesiapapun ', NULL, NULL, NULL, '1', NULL);
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;

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

-- Dumping data for table db_otpwhatsapp.pesan: ~53 rows (approximately)
/*!40000 ALTER TABLE `pesan` DISABLE KEYS */;
INSERT INTO `pesan` (`id`, `body`, `tp`, `fr`, `tu`, `datetime`, `status`) VALUES
	(1, _binary 0x6869, NULL, '62895361034833@c.us', NULL, NULL, NULL),
	(2, _binary 0x6869, NULL, '62895361034833@c.us', NULL, NULL, 1);
/*!40000 ALTER TABLE `pesan` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
