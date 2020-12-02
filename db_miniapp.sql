-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 01, 2020 at 07:02 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_miniapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cars`
--

DROP TABLE IF EXISTS `tbl_cars`;
CREATE TABLE IF NOT EXISTS `tbl_cars` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Model` varchar(40) NOT NULL,
  `Type` varchar(25) NOT NULL,
  `Price` varchar(10) NOT NULL,
  `Power` varchar(10) NOT NULL,
  `Consumption` varchar(10) NOT NULL,
  `Space` varchar(10) NOT NULL,
  `Image` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cars`
--

INSERT INTO `tbl_cars` (`ID`, `Model`, `Type`, `Price`, `Power`, `Consumption`, `Space`, `Image`) VALUES
(1, 'Mini 3 Door', 'Cooper', '$23,490', '134', '7.5', ' 211 - 731', '3Door-Cooper.png'),
(2, 'Mini 3 Door', 'John Cooper Works', '$35,440', '228', '8.1', '211 - 731', '3Door-John-Cooper-Works.png'),
(3, 'Mini 5 Door', 'Cooper', '$24,790', '134', '7.5', '278 - 941', '5Door-Cooper.png'),
(4, 'Mini 5 Door', 'Cooper S', '$29,090', '189', '7.9', '278 - 941', '5Door-Cooper-S.png'),
(5, 'Mini Clubman', 'Cooper All4', '$29,990', '134', '8.5', '360 - 1250', 'Clubman-Cooper-All4.png'),
(6, 'Mini Clubman', 'Cooper S All4', '$32,990', '189', '8.9', '360 - 1250', 'Clubman-Cooper-S-All4.png'),
(7, 'Mini Convertible', 'Cooper', '$30,090', '134', '7.5', '160 - 215', 'Convertible-Cooper.png'),
(8, 'Mini Convertible', 'John Cooper Works', '$43,140', '228', '8.3', '160 - 215', 'Convertible-John-Cooper-Works.png'),
(9, 'Mini Countryman', 'Cooper S All4', '$35,990', '189', 'TBA', '450 - 1390', 'Countryman-Cooper-S-All4.png'),
(10, 'Mini Countryman', 'Cooper SE All4', '$44,990', '134', 'TBA', '450 - 1275', 'Countryman-Cooper-SE-All4.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
