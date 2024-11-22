-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 22, 2024 at 07:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donutdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `donuts`
--

CREATE TABLE `donuts` (
  `ID` int(11) NOT NULL,
  `Name` varchar(64) NOT NULL,
  `Description` varchar(64) NOT NULL,
  `Price` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donuts`
--

INSERT INTO `donuts` (`ID`, `Name`, `Description`, `Price`) VALUES
(1, 'Glazed Donut', 'Donut with sticky-sweet glaze', '$0.99'),
(5, 'Jelly Donut', 'Donut stuffed with strawberry jelly', '$1.49'),
(6, 'Chocolate-Frosted Donut', 'Donut covered in chocolate frosting', '$0.99'),
(9, 'Maple Syrup Donut', 'Donut infused and glazed with genuine maple syrup', '$1.99'),
(220, 'Mega Donut', 'A huge donut that is perfect for sharing with friends', '$4.99'),
(221, 'Blueberry Donut', 'Donut flavored with real blueberries', '$1.49'),
(222, 'Diet Donut', 'Donut with reduced sugar content', '$0.99'),
(223, 'Mini donut', 'Small donut for small appetites', '$0.49'),
(224, 'Cherry Donut', 'Cherry-flavored donut', '$1.49'),
(225, 'Cake Donut', 'Donut made from cake batter', '$0.99'),
(226, 'Matcha Donut', 'Matcha-flavored donut', '$1.49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donuts`
--
ALTER TABLE `donuts`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donuts`
--
ALTER TABLE `donuts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=227;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
