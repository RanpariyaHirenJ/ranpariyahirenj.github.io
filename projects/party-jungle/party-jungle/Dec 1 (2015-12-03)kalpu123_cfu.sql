-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 03, 2015 at 06:53 AM
-- Server version: 5.6.22-cll-lve
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kalpu123_cfu`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE IF NOT EXISTS `administrator` (
  `admin_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `admin_type` tinyint(3) unsigned NOT NULL,
  `admin_email` varchar(150) NOT NULL,
  `admin_password` varchar(150) NOT NULL,
  `status` tinyint(3) unsigned NOT NULL,
  `admin_name` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`admin_id`, `admin_type`, `admin_email`, `admin_password`, `status`, `admin_name`) VALUES
(1, 1, 'admin', 'pjcfu123*#', 1, 'Kevin Borgersen');

-- --------------------------------------------------------

--
-- Table structure for table `craft_items_master`
--

CREATE TABLE IF NOT EXISTS `craft_items_master` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `item_slug` varchar(250) NOT NULL,
  `item_photo` varchar(200) DEFAULT NULL,
  `item_desc` longtext,
  `item_status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`item_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=70 ;

--
-- Dumping data for table `craft_items_master`
--

INSERT INTO `craft_items_master` (`item_id`, `item_name`, `item_slug`, `item_photo`, `item_desc`, `item_status`) VALUES
(51, 'candy bouquet', 'candy-bouquet', '3006201513075237.JPG', 'Yummy candy''s in vivid shapes and mouth watering flavors.', 0),
(46, 'shopkins case', 'shopkins-case', '3006201511362528.JPG', 'Beautiful cases for you to keep, variety of things, right from stationary to hair clips.', 0),
(53, 'back to school boards', 'back-to-school-boards', '0708201510100439.jpg', 'Reusable chalk board for back to school', 0),
(48, 'tumblers', 'tumblers', '3006201512562834.JPG', 'Fancy cups', 0),
(59, 'month boards', 'month-boards', '3107201512185835.jpg', 'Reusable monthly fill in chalkboard', 0),
(49, 'funky caps', 'funky-caps', '3006201513013625.png', 'Funky caps for childrens with stunning colours and cool graphics', 0),
(50, 'water bottles', 'water-bottles', '300620151302139.jpg', 'Cartoon bottles for children with cool graphics and amazing colors.', 0),
(55, 'bubble totes', 'bubble-totes', '0708201510113642.png', '', 1),
(56, 'caddy', 'caddy', NULL, NULL, 0),
(57, 'cold cups', 'cold-cups', NULL, NULL, 0),
(58, 'bond cases', 'bond-cases', NULL, NULL, 0),
(60, 'barbie case', 'barbie-case', NULL, 'Store your Barbie Dolls in Style', 0),
(61, 'personalized santa sacks! 24x36', 'personalized-santa-sacks!-24x36', '291020152032279.jpg', '$25 each, (discount for 3 or more)', 0),
(62, 'merry mail', 'merry-mail', '011120151143492.jpg', 'Personalized card holder.  Just provide us with your last name. 2 feet long X 4 inches wide.  $35', 0),
(63, 'countdown plate', 'countdown-plate', '0111201511470545.png', 'Perfect holiday decoration. Choice of red or gold.  $15', 0),
(64, 'toy box', 'toy-box', '011120151835238.png', 'We can personalize the toybox in most themes.  Just ask!  $195', 0),
(65, 'rocking chair', 'rocking-chair', '0111201518370739.png', 'We can personalize your rocking chair with any theme.', 0),
(66, 'stocking holder', 'stocking-holder', '0111201518511340.png', 'Add up to 5 names on this amazing display. $30', 0),
(67, 'just like you bags', 'just-like-you-bags', '0111201519114118.jpg', 'These bags can be designed with your likeness.  Adults or children. $45', 0),
(68, 'teacher apple plaque', 'teacher-apple-plaque', '021120150710301.jpg', 'Choose your own saying $12', 0),
(69, 'teacher travel mug', 'teacher-travel-mug', '0211201507114350.png', 'Customers mug for your favorite teacher.  $10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `craft_items_properties`
--

CREATE TABLE IF NOT EXISTS `craft_items_properties` (
  `property_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NOT NULL,
  `property_name` varchar(255) NOT NULL,
  `property_photo` varchar(200) DEFAULT NULL,
  `property_desc` longtext,
  `property_status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`property_id`),
  KEY `item_id` (`item_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=75 ;

--
-- Dumping data for table `craft_items_properties`
--

INSERT INTO `craft_items_properties` (`property_id`, `item_id`, `property_name`, `property_photo`, `property_desc`, `property_status`) VALUES
(1, 43, 'color', '2606201516151333.jpg', 'Blue Mobile', 1),
(2, 43, 'size', '2606201516154029.jpg', '10 Inch Size Mobile', 0),
(3, 37, 'weight', '2406201513201647.jpg', '', 0),
(13, 38, 'size', '2606201515430710.jpg', 'small size pen', 0),
(12, 38, 'color', '2606201515433149.jpg', 'nice pen', 0),
(14, 38, 'weight', '2606201515434940.jpg', 'very nice pen', 0),
(15, 37, 'size', '2606201515514324.jpg', 'Chair Image', 0),
(16, 37, 'color', '2606201515515916.jpg', 'Chair Img', 0),
(17, 39, 'hight', '260620151601174.jpg', '5fit', 0),
(18, 39, 'weight', '2606201516020542.jpg', 'It bottle weight is 50gm', 0),
(19, 39, 'color', '2606201516025912.jpg', 'blue color bootle', 0),
(20, 42, 'hight', '2606201516074911.jpg', '20 inch tablet', 0),
(21, 42, 'weight', '260620151608347.jpg', 'It tab is 200gm .', 0),
(22, 42, 'color', '2606201516090117.jpg', 'red color tab', 0),
(23, 42, 'company', NULL, NULL, 0),
(24, 42, 'operating system', NULL, NULL, 0),
(25, 42, 'screen size', NULL, NULL, 0),
(26, 42, 'screen type', NULL, NULL, 0),
(27, 46, 'size', '3006201513041931.png', '', 0),
(28, 46, 'color', '300620151304304.png', '', 0),
(29, 46, 'type', '3006201513043947.png', '', 0),
(30, 46, 'quantity', '3006201513044835.png', '', 1),
(31, 47, 'quantity', '3006201513062542.png', '', 0),
(32, 47, 'type', '3006201513063213.png', '', 0),
(33, 47, 'size', '3006201513064042.png', '', 0),
(34, 47, 'color', '300620151306483.png', '', 0),
(35, 51, 'quantity', '3006201513104948.png', '', 1),
(36, 51, 'flavors', '3006201513125546.png', '', 0),
(37, 51, 'wrapping', '300620151313034.png', '', 0),
(38, 50, 'quantity', '300620151314094.png', '', 1),
(39, 50, 'sizes', '300620151314250.png', '', 0),
(40, 50, 'color', '3006201513143420.png', '', 0),
(41, 50, 'type', '300620151314439.png', '', 0),
(42, 49, 'quantity', '3006201513153039.png', '', 1),
(43, 49, 'sizes', '3006201513153646.png', '', 0),
(44, 49, 'color', '3006201513154619.png', '', 0),
(45, 48, 'quantity', '3006201513163446.png', '', 1),
(46, 48, 'type', '300620151316413.png', '', 0),
(47, 48, 'size', '300620151316510.png', '', 0),
(48, 48, 'colour', '', 'Clear', 0),
(49, 52, 'color', NULL, NULL, 0),
(50, 52, 'height', NULL, NULL, 0),
(51, 52, 'weight', NULL, NULL, 0),
(52, 52, '', NULL, NULL, 0),
(53, 53, 'size', NULL, NULL, 0),
(54, 53, 'age', NULL, NULL, 0),
(55, 53, 'color', NULL, NULL, 0),
(56, 53, '', NULL, NULL, 0),
(57, 55, 'mini $15', NULL, NULL, 0),
(58, 55, 'medium $8', NULL, NULL, 0),
(59, 55, 'large $15', NULL, NULL, 0),
(60, 56, 'blue', NULL, NULL, 0),
(61, 56, 'pink', NULL, NULL, 0),
(62, 56, 'white', NULL, NULL, 0),
(63, 57, 'clear $8', NULL, NULL, 0),
(64, 58, 'mini $5', NULL, NULL, 0),
(65, 58, 'medium $8', NULL, NULL, 0),
(66, 58, 'large $12', NULL, NULL, 0),
(67, 59, 'boy or girl', '3107201511423737.jpg', 'Monthly reusable baby board', 0),
(68, 60, 'quantity', NULL, NULL, 0),
(69, 63, 'color', NULL, NULL, 0),
(70, 65, 'size', NULL, NULL, 0),
(71, 65, 'finish', NULL, NULL, 0),
(72, 64, 'finish', NULL, NULL, 0),
(73, 66, 'color', NULL, NULL, 0),
(74, 67, 'type', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `craft_items_properties_value`
--

CREATE TABLE IF NOT EXISTS `craft_items_properties_value` (
  `property_value_id` int(11) NOT NULL AUTO_INCREMENT,
  `property_id` int(11) NOT NULL,
  `property_value_name` varchar(255) NOT NULL,
  `property_value_photo` varchar(200) DEFAULT NULL,
  `property_value_desc` longtext,
  `property_value_status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`property_value_id`),
  KEY `property_id` (`property_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=432 ;

--
-- Dumping data for table `craft_items_properties_value`
--

INSERT INTO `craft_items_properties_value` (`property_value_id`, `property_id`, `property_value_name`, `property_value_photo`, `property_value_desc`, `property_value_status`) VALUES
(6, 2, '5 inch', '2606201516292645.jpg', '5 inch mobile', 0),
(2, 1, 'green1', '2606201516170423.jpg', 'green mobile image', 0),
(3, 1, 'blue3', '2606201516184427.jpg', 'blue mobile', 1),
(4, 1, 'yellow3', '2606201516195446.jpg', 'It is yellow mobile', 0),
(5, 2, '4 inch', '2606201516300835.jpg', '4 inch mobile', 0),
(7, 2, '6 inch', '260620151630278.jpg', '6 inch mobile', 0),
(8, 3, '1 kg', '2406201513233623.jpg', '', 0),
(9, 3, '2kg', '2406201513234228.jpg', '', 0),
(28, 12, 'red', '2606201515485531.jpg', 'red pen', 0),
(27, 13, '7gm', '260620151545323.jpg', 'pen value is good', 0),
(26, 13, '6gm', '2606201515463527.jpg', 'pen value is good', 0),
(25, 13, '5gm', '2606201515465411.jpg', 'this is not good value', 0),
(29, 12, 'green', '2606201515494433.jpg', 'green pen', 0),
(30, 12, 'blue', '2606201515501922.jpg', 'blue pen', 0),
(31, 15, '10 inch', '2606201515525010.jpg', 'it is 10 inch chair', 0),
(32, 15, '7inch', '2606201515532729.jpg', 'it is 7 inch chair', 0),
(33, 14, '2gm', '2606201515542916.jpg', 'it is 2 gm pen', 0),
(34, 14, '3gm', '2606201515545238.jpg', 'it is three gm pen', 0),
(35, 14, '4gm', '2606201515551230.jpg', 'It is 4 gm pen', 0),
(36, 19, 'red', '260620151558138.jpg', 'red bottel', 0),
(37, 19, 'green', '2606201515590829.jpg', 'IT IS GREEN BOTTEL', 0),
(38, 19, 'blue', '2606201515594527.jpg', 'BLUE BOTTEL', 0),
(39, 17, '20 ench', '2606201516035647.jpg', '20 ench bottle', 0),
(40, 18, '30 gm', '260620151605508.jpg', '30 gm bottle', 0),
(41, 20, '40 inch', '2606201516105628.jpg', 'It tabis 40inch', 0),
(42, 21, '400gm', '2606201516114211.jpg', 'it tab value is 400 gm', 0),
(43, 22, 'green', '2606201516270849.jpg', 'It is green tab', 0),
(44, 22, 'blue', '2606201516133746.jpg', 'It is blue  tab', 0),
(45, 16, 'red', '2606201516234010.jpg', 'It  is red chair', 0),
(46, 16, 'green', '2606201516242035.jpg', 'It is green chair', 0),
(47, 16, 'blue', '2606201516245519.jpg', 'It is blue chair', 0),
(48, 23, 'samsung', NULL, NULL, 0),
(49, 23, 'lenovo', NULL, NULL, 0),
(50, 23, 'videocon', NULL, NULL, 0),
(51, 23, 'lg', NULL, NULL, 0),
(52, 23, 'nokia', NULL, NULL, 0),
(53, 23, 'micromax', NULL, NULL, 0),
(54, 24, 'os1', NULL, NULL, 0),
(55, 24, 'os2', NULL, NULL, 0),
(56, 25, '10 inch', NULL, NULL, 0),
(57, 25, '12 inch', NULL, NULL, 0),
(58, 25, '14 inch', NULL, NULL, 0),
(59, 25, '16 inch', NULL, NULL, 0),
(60, 26, 'type1', NULL, NULL, 0),
(61, 26, 'type2', NULL, NULL, 0),
(62, 27, 'small', NULL, NULL, 0),
(63, 27, 'medium', NULL, NULL, 0),
(64, 27, 'large', NULL, NULL, 0),
(65, 28, 'blue', NULL, NULL, 0),
(66, 28, 'pink', NULL, NULL, 0),
(67, 28, 'purple', NULL, NULL, 0),
(68, 28, 'green', NULL, NULL, 0),
(69, 29, 'girl', NULL, NULL, 0),
(70, 29, 'boy', NULL, NULL, 0),
(71, 30, '1', NULL, NULL, 0),
(72, 30, '2', NULL, NULL, 0),
(73, 30, '3', NULL, NULL, 0),
(74, 30, '4', NULL, NULL, 0),
(75, 30, '5', NULL, NULL, 0),
(76, 30, '6', NULL, NULL, 0),
(77, 30, '7', NULL, NULL, 0),
(78, 30, '8', NULL, NULL, 0),
(79, 30, '9', NULL, NULL, 0),
(80, 30, '10', NULL, NULL, 0),
(81, 30, '11', NULL, NULL, 0),
(82, 30, '12', NULL, NULL, 0),
(83, 30, '13', NULL, NULL, 0),
(84, 30, '14', NULL, NULL, 0),
(85, 30, '15', NULL, NULL, 0),
(86, 30, '16', NULL, NULL, 0),
(87, 30, '17', NULL, NULL, 0),
(88, 30, '18', NULL, NULL, 0),
(89, 30, '19', NULL, NULL, 0),
(90, 30, '20', NULL, NULL, 0),
(91, 30, '21', NULL, NULL, 0),
(92, 30, '22', NULL, NULL, 0),
(93, 30, '23', NULL, NULL, 0),
(94, 30, '24', NULL, NULL, 0),
(95, 30, '25', NULL, NULL, 0),
(96, 30, '26', NULL, NULL, 0),
(97, 30, '27', NULL, NULL, 0),
(98, 30, '28', NULL, NULL, 0),
(99, 30, '29', NULL, NULL, 0),
(100, 30, '30', NULL, NULL, 0),
(101, 30, '31', NULL, NULL, 0),
(102, 30, '32', NULL, NULL, 0),
(103, 30, '33', NULL, NULL, 0),
(104, 30, '34', NULL, NULL, 0),
(105, 30, '35', NULL, NULL, 0),
(106, 30, '36', NULL, NULL, 0),
(107, 30, '37', NULL, NULL, 0),
(108, 30, '38', NULL, NULL, 0),
(109, 30, '39', NULL, NULL, 0),
(110, 30, '40', NULL, NULL, 0),
(111, 30, '41', NULL, NULL, 0),
(112, 30, '42', NULL, NULL, 0),
(113, 30, '43', NULL, NULL, 0),
(114, 30, '44', NULL, NULL, 0),
(115, 30, '45', NULL, NULL, 0),
(116, 30, '46', NULL, NULL, 0),
(117, 30, '47', NULL, NULL, 0),
(118, 30, '48', NULL, NULL, 0),
(119, 30, '49', NULL, NULL, 0),
(120, 30, '50', NULL, NULL, 0),
(121, 31, '1', NULL, NULL, 0),
(122, 31, '2', NULL, NULL, 0),
(123, 31, '3', NULL, NULL, 0),
(124, 31, '4', NULL, NULL, 0),
(125, 31, '5', NULL, NULL, 0),
(126, 31, '6', NULL, NULL, 0),
(127, 31, '7', NULL, NULL, 0),
(128, 31, '8', NULL, NULL, 0),
(129, 31, '9', NULL, NULL, 0),
(130, 31, '10', NULL, NULL, 0),
(131, 31, '11', NULL, NULL, 0),
(132, 31, '12', NULL, NULL, 0),
(133, 31, '13', NULL, NULL, 0),
(134, 31, '14', NULL, NULL, 0),
(135, 31, '15', NULL, NULL, 0),
(136, 31, '16', NULL, NULL, 0),
(137, 31, '17', NULL, NULL, 0),
(138, 31, '18', NULL, NULL, 0),
(139, 31, '19', NULL, NULL, 0),
(140, 31, '20', NULL, NULL, 0),
(141, 31, '21', NULL, NULL, 0),
(142, 31, '22', NULL, NULL, 0),
(143, 31, '23', NULL, NULL, 0),
(144, 31, '24', NULL, NULL, 0),
(145, 31, '25', NULL, NULL, 0),
(146, 31, '26', NULL, NULL, 0),
(147, 31, '27', NULL, NULL, 0),
(148, 31, '28', NULL, NULL, 0),
(149, 31, '29', NULL, NULL, 0),
(150, 31, '30', NULL, NULL, 0),
(151, 31, '31', NULL, NULL, 0),
(152, 31, '32', NULL, NULL, 0),
(153, 31, '33', NULL, NULL, 0),
(154, 31, '34', NULL, NULL, 0),
(155, 31, '35', NULL, NULL, 0),
(156, 31, '36', NULL, NULL, 0),
(157, 31, '37', NULL, NULL, 0),
(158, 31, '38', NULL, NULL, 0),
(159, 31, '39', NULL, NULL, 0),
(160, 31, '40', NULL, NULL, 0),
(161, 31, '41', NULL, NULL, 0),
(162, 31, '42', NULL, NULL, 0),
(163, 31, '43', NULL, NULL, 0),
(164, 31, '44', NULL, NULL, 0),
(165, 31, '45', NULL, NULL, 0),
(166, 31, '46', NULL, NULL, 0),
(167, 31, '47', NULL, NULL, 0),
(168, 31, '48', NULL, NULL, 0),
(169, 31, '49', NULL, NULL, 0),
(170, 31, '50', NULL, NULL, 0),
(171, 32, 'girl', NULL, NULL, 0),
(172, 32, 'boy', NULL, NULL, 0),
(173, 33, 'small', NULL, NULL, 0),
(174, 33, 'medium', NULL, NULL, 0),
(175, 33, 'large', NULL, NULL, 0),
(176, 34, 'blue and pink', NULL, NULL, 0),
(177, 34, 'purple and green', NULL, NULL, 0),
(178, 45, '1', NULL, NULL, 0),
(179, 45, '2', NULL, NULL, 0),
(180, 45, '3', NULL, NULL, 0),
(181, 45, '4', NULL, NULL, 0),
(182, 45, '5', NULL, NULL, 0),
(183, 45, '6', NULL, NULL, 0),
(184, 45, '7', NULL, NULL, 0),
(185, 45, '8', NULL, NULL, 0),
(186, 45, '9', NULL, NULL, 0),
(187, 45, '10', NULL, NULL, 0),
(188, 45, '11', NULL, NULL, 0),
(189, 45, '12', NULL, NULL, 0),
(190, 45, '13', NULL, NULL, 0),
(191, 45, '14', NULL, NULL, 0),
(192, 45, '15', NULL, NULL, 0),
(193, 45, '16', NULL, NULL, 0),
(194, 45, '17', NULL, NULL, 0),
(195, 45, '18', NULL, NULL, 0),
(196, 45, '19', NULL, NULL, 0),
(197, 45, '20', NULL, NULL, 0),
(198, 45, '21', NULL, NULL, 0),
(199, 45, '22', NULL, NULL, 0),
(200, 45, '23', NULL, NULL, 0),
(201, 45, '24', NULL, NULL, 0),
(202, 45, '25', NULL, NULL, 0),
(203, 45, '26', NULL, NULL, 0),
(204, 45, '27', NULL, NULL, 0),
(205, 45, '28', NULL, NULL, 0),
(206, 45, '29', NULL, NULL, 0),
(207, 45, '30', NULL, NULL, 0),
(208, 45, '31', NULL, NULL, 0),
(209, 45, '32', NULL, NULL, 0),
(210, 45, '33', NULL, NULL, 0),
(211, 45, '34', NULL, NULL, 0),
(212, 45, '35', NULL, NULL, 0),
(213, 45, '36', NULL, NULL, 0),
(214, 45, '37', NULL, NULL, 0),
(215, 45, '38', NULL, NULL, 0),
(216, 45, '39', NULL, NULL, 0),
(217, 45, '40', NULL, NULL, 0),
(218, 45, '41', NULL, NULL, 0),
(219, 45, '42', NULL, NULL, 0),
(220, 45, '43', NULL, NULL, 0),
(221, 45, '44', NULL, NULL, 0),
(222, 45, '45', NULL, NULL, 0),
(223, 45, '46', NULL, NULL, 0),
(224, 45, '47', NULL, NULL, 0),
(225, 45, '48', NULL, NULL, 0),
(226, 45, '49', NULL, NULL, 0),
(227, 45, '50', NULL, NULL, 0),
(228, 46, 'boy', NULL, NULL, 0),
(229, 46, 'girl', NULL, NULL, 0),
(230, 47, 'small', NULL, NULL, 0),
(231, 47, 'medium', NULL, NULL, 0),
(232, 47, 'large', NULL, NULL, 0),
(410, 67, 'boy', NULL, NULL, 0),
(409, 48, 'clear', NULL, NULL, 0),
(235, 42, '1', NULL, NULL, 0),
(236, 42, '2', NULL, NULL, 0),
(237, 42, '3', NULL, NULL, 0),
(238, 42, '4', NULL, NULL, 0),
(239, 42, '5', NULL, NULL, 0),
(240, 42, '6', NULL, NULL, 0),
(241, 42, '7', NULL, NULL, 0),
(242, 42, '8', NULL, NULL, 0),
(243, 42, '9', NULL, NULL, 0),
(244, 42, '10', NULL, NULL, 0),
(245, 42, '11', NULL, NULL, 0),
(246, 42, '12', NULL, NULL, 0),
(247, 42, '13', NULL, NULL, 0),
(248, 42, '14', NULL, NULL, 0),
(249, 42, '15', NULL, NULL, 0),
(250, 42, '16', NULL, NULL, 0),
(251, 42, '17', NULL, NULL, 0),
(252, 42, '18', NULL, NULL, 0),
(253, 42, '19', NULL, NULL, 0),
(254, 42, '20', NULL, NULL, 0),
(255, 42, '21', NULL, NULL, 0),
(256, 42, '22', NULL, NULL, 0),
(257, 42, '23', NULL, NULL, 0),
(258, 42, '24', NULL, NULL, 0),
(259, 42, '25', NULL, NULL, 0),
(260, 42, '26', NULL, NULL, 0),
(261, 42, '27', NULL, NULL, 0),
(262, 42, '28', NULL, NULL, 0),
(263, 42, '29', NULL, NULL, 0),
(264, 42, '30', NULL, NULL, 0),
(265, 42, '31', NULL, NULL, 0),
(266, 42, '32', NULL, NULL, 0),
(267, 42, '33', NULL, NULL, 0),
(268, 42, '34', NULL, NULL, 0),
(269, 42, '35', NULL, NULL, 0),
(270, 42, '36', NULL, NULL, 0),
(271, 42, '37', NULL, NULL, 0),
(272, 42, '38', NULL, NULL, 0),
(273, 42, '39', NULL, NULL, 0),
(274, 42, '40', NULL, NULL, 0),
(275, 42, '41', NULL, NULL, 0),
(276, 42, '42', NULL, NULL, 0),
(277, 42, '43', NULL, NULL, 0),
(278, 42, '44', NULL, NULL, 0),
(279, 42, '45', NULL, NULL, 0),
(280, 42, '46', NULL, NULL, 0),
(281, 42, '47', NULL, NULL, 0),
(282, 42, '48', NULL, NULL, 0),
(283, 42, '49', NULL, NULL, 0),
(284, 42, '50', NULL, NULL, 0),
(285, 43, 'small', NULL, NULL, 0),
(286, 43, 'medium', NULL, NULL, 0),
(287, 43, 'large', NULL, NULL, 0),
(288, 44, 'blue and pink', NULL, NULL, 0),
(289, 44, 'purple and green', NULL, NULL, 0),
(290, 38, '1', NULL, NULL, 0),
(291, 38, '2', NULL, NULL, 0),
(292, 38, '3', NULL, NULL, 0),
(293, 38, '4', NULL, NULL, 0),
(294, 38, '5', NULL, NULL, 0),
(295, 38, '6', NULL, NULL, 0),
(296, 38, '7', NULL, NULL, 0),
(297, 38, '8', NULL, NULL, 0),
(298, 38, '9', NULL, NULL, 0),
(299, 38, '10', NULL, NULL, 0),
(300, 38, '11', NULL, NULL, 0),
(301, 38, '12', NULL, NULL, 0),
(302, 38, '13', NULL, NULL, 0),
(303, 38, '14', NULL, NULL, 0),
(304, 38, '15', NULL, NULL, 0),
(305, 38, '16', NULL, NULL, 0),
(306, 38, '17', NULL, NULL, 0),
(307, 38, '18', NULL, NULL, 0),
(308, 38, '19', NULL, NULL, 0),
(309, 38, '20', NULL, NULL, 0),
(310, 38, '21', NULL, NULL, 0),
(311, 38, '22', NULL, NULL, 0),
(312, 38, '23', NULL, NULL, 0),
(313, 38, '24', NULL, NULL, 0),
(314, 38, '25', NULL, NULL, 0),
(315, 38, '26', NULL, NULL, 0),
(316, 38, '27', NULL, NULL, 0),
(317, 38, '28', NULL, NULL, 0),
(318, 38, '29', NULL, NULL, 0),
(319, 38, '30', NULL, NULL, 0),
(320, 38, '31', NULL, NULL, 0),
(321, 38, '32', NULL, NULL, 0),
(322, 38, '33', NULL, NULL, 0),
(323, 38, '34', NULL, NULL, 0),
(324, 38, '35', NULL, NULL, 0),
(325, 38, '36', NULL, NULL, 0),
(326, 38, '37', NULL, NULL, 0),
(327, 38, '38', NULL, NULL, 0),
(328, 38, '39', NULL, NULL, 0),
(329, 38, '40', NULL, NULL, 0),
(330, 38, '41', NULL, NULL, 0),
(331, 38, '42', NULL, NULL, 0),
(332, 38, '43', NULL, NULL, 0),
(333, 38, '44', NULL, NULL, 0),
(334, 38, '45', NULL, NULL, 0),
(335, 38, '46', NULL, NULL, 0),
(336, 38, '47', NULL, NULL, 0),
(337, 38, '48', NULL, NULL, 0),
(338, 38, '49', NULL, NULL, 0),
(339, 38, '50', NULL, NULL, 0),
(340, 39, 'small', NULL, NULL, 0),
(341, 39, 'medium', NULL, NULL, 0),
(342, 39, 'large', NULL, NULL, 0),
(343, 40, 'blue and pink', NULL, NULL, 0),
(344, 40, 'purple and green', NULL, NULL, 0),
(345, 41, 'girl', NULL, NULL, 0),
(346, 41, 'boy', NULL, NULL, 0),
(347, 35, '1', NULL, NULL, 0),
(348, 35, '2', NULL, NULL, 0),
(349, 35, '3', NULL, NULL, 0),
(350, 35, '4', NULL, NULL, 0),
(351, 35, '5', NULL, NULL, 0),
(352, 35, '6', NULL, NULL, 0),
(353, 35, '7', NULL, NULL, 0),
(354, 35, '8', NULL, NULL, 0),
(355, 35, '9', NULL, NULL, 0),
(356, 35, '10', NULL, NULL, 0),
(357, 35, '11', NULL, NULL, 0),
(358, 35, '12', NULL, NULL, 0),
(359, 35, '13', NULL, NULL, 0),
(360, 35, '14', NULL, NULL, 0),
(361, 35, '15', NULL, NULL, 0),
(362, 35, '16', NULL, NULL, 0),
(363, 35, '17', NULL, NULL, 0),
(364, 35, '18', NULL, NULL, 0),
(365, 35, '19', NULL, NULL, 0),
(366, 35, '20', NULL, NULL, 0),
(367, 35, '21', NULL, NULL, 0),
(368, 35, '22', NULL, NULL, 0),
(369, 35, '23', NULL, NULL, 0),
(370, 35, '24', NULL, NULL, 0),
(371, 35, '25', NULL, NULL, 0),
(372, 35, '26', NULL, NULL, 0),
(373, 35, '27', NULL, NULL, 0),
(374, 35, '28', NULL, NULL, 0),
(375, 35, '29', NULL, NULL, 0),
(376, 35, '30', NULL, NULL, 0),
(377, 35, '31', NULL, NULL, 0),
(378, 35, '32', NULL, NULL, 0),
(379, 35, '33', NULL, NULL, 0),
(380, 35, '34', NULL, NULL, 0),
(381, 35, '35', NULL, NULL, 0),
(382, 35, '36', NULL, NULL, 0),
(383, 35, '37', NULL, NULL, 0),
(384, 35, '38', NULL, NULL, 0),
(385, 35, '39', NULL, NULL, 0),
(386, 35, '40', NULL, NULL, 0),
(387, 35, '41', NULL, NULL, 0),
(388, 35, '42', NULL, NULL, 0),
(389, 35, '43', NULL, NULL, 0),
(390, 35, '44', NULL, NULL, 0),
(391, 35, '45', NULL, NULL, 0),
(392, 35, '46', NULL, NULL, 0),
(393, 35, '47', NULL, NULL, 0),
(394, 35, '48', NULL, NULL, 0),
(395, 35, '49', NULL, NULL, 0),
(396, 35, '50', NULL, NULL, 0),
(397, 36, 'strawberry and vanilla', NULL, NULL, 0),
(398, 36, 'mango and vanilla', NULL, NULL, 0),
(399, 36, 'mango and black current', NULL, NULL, 0),
(400, 36, 'assorted', NULL, NULL, 0),
(401, 37, 'plastic', NULL, NULL, 0),
(402, 37, 'foil', NULL, NULL, 0),
(403, 49, 'black', NULL, NULL, 0),
(404, 49, 'white', NULL, NULL, 0),
(405, 49, 'spanish', NULL, NULL, 0),
(406, 49, 'chinese', NULL, NULL, 0),
(407, 60, 'empty $12', NULL, NULL, 0),
(408, 60, 'filled $25', NULL, NULL, 0),
(411, 67, 'girl', NULL, NULL, 0),
(412, 68, '1', NULL, NULL, 0),
(413, 68, '2', NULL, NULL, 0),
(414, 68, '3', NULL, NULL, 0),
(415, 68, '4', NULL, NULL, 0),
(416, 68, '5', NULL, NULL, 0),
(417, 69, 'red', NULL, NULL, 0),
(418, 69, 'gold', NULL, NULL, 0),
(419, 70, 'small $85', NULL, NULL, 0),
(420, 70, 'large $125', NULL, NULL, 0),
(421, 71, 'white', NULL, NULL, 0),
(422, 71, 'natural', NULL, NULL, 0),
(423, 71, 'cherry', NULL, NULL, 0),
(424, 72, 'white', NULL, NULL, 0),
(425, 72, 'natural', NULL, NULL, 0),
(426, 72, 'cherry', NULL, NULL, 0),
(427, 73, 'red', NULL, NULL, 0),
(428, 73, 'gold', NULL, NULL, 0),
(429, 73, 'neutral', NULL, NULL, 0),
(430, 74, 'adult', '011120151912421.jpg', '', 0),
(431, 74, 'child', '0111201519125619.png', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `craft_mapping`
--

CREATE TABLE IF NOT EXISTS `craft_mapping` (
  `craft_map_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`craft_map_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=82 ;

--
-- Dumping data for table `craft_mapping`
--

INSERT INTO `craft_mapping` (`craft_map_id`, `item_id`, `category_id`) VALUES
(1, 51, 1),
(2, 46, 1),
(3, 53, 2),
(4, 48, 2),
(26, 51, 3),
(27, 46, 3),
(28, 53, 3),
(29, 48, 3),
(30, 59, 3),
(31, 49, 3),
(32, 50, 3),
(33, 55, 3),
(34, 56, 3),
(35, 57, 3),
(36, 58, 3),
(37, 51, 4),
(38, 51, 5),
(39, 46, 5),
(46, 51, 7),
(47, 46, 7),
(48, 48, 7),
(49, 59, 7),
(50, 49, 7),
(51, 50, 7),
(52, 55, 7),
(53, 56, 7),
(54, 57, 7),
(55, 58, 7),
(64, 64, 10),
(65, 65, 10),
(66, 61, 9),
(67, 62, 9),
(68, 63, 9),
(69, 66, 9),
(70, 46, 8),
(71, 64, 8),
(77, 46, 6),
(78, 53, 6),
(79, 50, 6),
(80, 68, 6),
(81, 69, 6);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_detail`
--

CREATE TABLE IF NOT EXISTS `enquiry_detail` (
  `enquiry_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `enquiry_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `our_cost` float NOT NULL,
  `client_cost` float NOT NULL,
  `product_note` longtext NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`enquiry_detail_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `enquiry_detail`
--

INSERT INTO `enquiry_detail` (`enquiry_detail_id`, `enquiry_id`, `item_id`, `our_cost`, `client_cost`, `product_note`, `quantity`) VALUES
(1, 1, 50, 10, 20, 'Cartoon bottles for children with cool graphics and amazing colors.', 2),
(2, 1, 49, 8, 10, 'Funky caps for childrens with stunning colours and cool graphics', 3),
(3, 2, 60, 0, 0, 'Joanna &Ella', 1),
(4, 3, 0, 0, 0, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_master`
--

CREATE TABLE IF NOT EXISTS `enquiry_master` (
  `enquiry_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(200) NOT NULL,
  `client_contact` varchar(14) NOT NULL,
  `client_email` varchar(50) NOT NULL,
  `order_date` date NOT NULL,
  `delivery_date` date DEFAULT NULL,
  `enquiry_note` longtext NOT NULL,
  `enquiry_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1-pending,2-confirm,3-completed',
  PRIMARY KEY (`enquiry_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `enquiry_master`
--

INSERT INTO `enquiry_master` (`enquiry_id`, `client_name`, `client_contact`, `client_email`, `order_date`, `delivery_date`, `enquiry_note`, `enquiry_status`) VALUES
(1, 'rajendra', '9619388096', 'rajendra@kalptech.com', '2015-08-25', '2015-08-30', 'This is a test inquiry...', 3),
(2, 'Christine DeFonte', '7187571384', 'Kevin.borgersen@gmail.com', '2015-09-17', '2015-09-23', 'I would like to order these two boards', 3),
(3, 'Josephine', '9178264448', 'Scalajo@aol.com', '2015-11-02', '2015-11-11', 'Hi Lisa, I would like a merry mail and stocking holder with 5 hooks. Both in red.', 3);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_property`
--

CREATE TABLE IF NOT EXISTS `enquiry_property` (
  `enquiry_property_id` int(11) NOT NULL AUTO_INCREMENT,
  `enquiry_detail_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `property_value_id` int(11) NOT NULL,
  PRIMARY KEY (`enquiry_property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `enquiry_property`
--

INSERT INTO `enquiry_property` (`enquiry_property_id`, `enquiry_detail_id`, `property_id`, `property_value_id`) VALUES
(1, 1, 39, 340),
(2, 1, 40, 343),
(3, 1, 41, 346),
(4, 2, 43, 286),
(5, 2, 44, 288),
(6, 3, 68, 413);

-- --------------------------------------------------------

--
-- Table structure for table `manage_category`
--

CREATE TABLE IF NOT EXISTS `manage_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(150) NOT NULL,
  `display_flag` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `manage_category`
--

INSERT INTO `manage_category` (`category_id`, `category_name`, `display_flag`) VALUES
(6, 'School', 0),
(7, 'For My Birthday', 0),
(8, 'Toy organization', 0),
(9, 'Christmas', 0),
(10, 'Furniture', 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `our_cost` float NOT NULL,
  `client_cost` float NOT NULL,
  `product_note` longtext NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `product_status` int(11) NOT NULL DEFAULT '1' COMMENT '1-order_created, 2-supply_ordered, 3-supply_recieved, 4-item_designed, 5-order_ready, 6-payment_pending, 7-payment_recieved',
  PRIMARY KEY (`order_detail_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=42 ;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_detail_id`, `order_id`, `item_id`, `our_cost`, `client_cost`, `product_note`, `quantity`, `product_status`) VALUES
(1, 1, 51, 8, 12, 'This is some dummy description, kindly ignore if viewing modified', 10, 7),
(2, 1, 48, 8, 10, 'This is some dummy description, kindly ignore if viewing.', 15, 7),
(3, 2, 51, 8, 10, 'This is some test message kindly ignore.', 10, 7),
(4, 2, 46, 10, 12, 'This is some test message kindly ignore.', 5, 7),
(5, 3, 58, 100, 150, 'Testing', 3, 7),
(6, 3, 56, 200, 300, 'Testing', 5, 7),
(8, 5, 51, 50, 60, 'ccccccccccccc', 10, 7),
(9, 5, 49, 10, 120, 'bbbbbbbbbbbbbbb', 10, 7),
(10, 5, 59, 200, 240, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, 7),
(11, 6, 49, 10, 12, 'Test Order Kindly Ignore.', 10, 7),
(12, 6, 59, 10, 15, 'Test Order Kindly Ignore.', 10, 7),
(13, 7, 58, 200, 199, 'Hello', 2, 7),
(14, 8, 51, 200, 300, 'Testing comment by Rajendra', 2, 7),
(15, 8, 46, 300, 400, 'Testing comment by Rajendra', 5, 7),
(16, 9, 51, 200, 300, 'Testing comment by Rajendra', 3, 7),
(17, 9, 46, 300, 400, 'Testing comment by Rajendra', 5, 7),
(18, 10, 46, 10, 12, '', 5, 7),
(19, 10, 51, 8, 10, '', 5, 7),
(20, 11, 46, 5, 15, '', 5, 7),
(21, 12, 59, 2, 30, 'Jack', 1, 7),
(22, 13, 53, 2, 25, 'leave name blank', 1, 3),
(23, 14, 53, 2, 25, '', 2, 3),
(24, 15, 53, 2, 25, 'Daniel...also ordered memory box', 1, 3),
(25, 16, 53, 2, 25, 'Vinny, Johnny', 2, 3),
(26, 17, 53, 2, 25, 'Danny, Michael', 2, 3),
(27, 18, 53, 2, 30, 'Alexis...sent paypal request condoggs143@aol.com...ship to Connie Alexiadis 35 Francis Terrace Glen Cove NY 11542...added 5.00 for shipping', 1, 3),
(28, 19, 53, 2, 25, 'Anthony', 1, 3),
(29, 20, 59, 2, 30, 'lt blue and white Jack', 1, 3),
(30, 21, 59, 2, 30, 'lt blue and white Peter Andrea', 1, 3),
(31, 22, 53, 2, 25, '2 school boards in pastel colors 1-first day of school 1-last day of school Emma Arlene sent paypal request Babalina1@aol.com', 2, 3),
(32, 23, 53, 2, 25, 'Daniela, Alex, Brianna', 3, 3),
(33, 24, 59, 2, 30, 'Giuliana Francesca and Alexandra Marie', 2, 3),
(34, 0, 50, 10, 20, 'Cartoon bottles for children with cool graphics and amazing colors.', 2, 1),
(35, 0, 49, 8, 10, 'Funky caps for childrens with stunning colours and cool graphics', 3, 1),
(36, 25, 50, 10, 20, 'Cartoon bottles for children with cool graphics and amazing colors.', 2, 1),
(37, 25, 49, 8, 10, 'Funky caps for childrens with stunning colours and cool graphics', 3, 1),
(38, 26, 60, 10, 20, 'Joanna &amp;Ella', 1, 1),
(39, 27, 0, 0, 0, '', 1, 1),
(40, 27, 62, 5, 35, 'Scala', 1, 1),
(41, 27, 66, 5, 30, 'Scala for mail.\r\nDad, Mom, Sebastian, Alessia and last hook leave blank.', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_master`
--

CREATE TABLE IF NOT EXISTS `order_master` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(50) NOT NULL,
  `client_contact` varchar(15) NOT NULL,
  `clent_email` varchar(50) NOT NULL,
  `order_date` date NOT NULL,
  `delivery_date` date NOT NULL,
  `order_note` longtext NOT NULL,
  `order_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1-order_created, 2-supply_ordered, 3-supply_recieved, 4-item_designed, 5-order_ready, 6-payment_pending, 7-payment_recieved',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `order_master`
--

INSERT INTO `order_master` (`order_id`, `client_name`, `client_contact`, `clent_email`, `order_date`, `delivery_date`, `order_note`, `order_status`) VALUES
(1, 'Kalpesh', '2147483647', 'kalpesh@kalptech.com', '2015-08-07', '2015-08-14', 'Some notes as per the customers request', 3),
(2, 'Sunil', '2147483647', 'sunil@kalptech.com', '2015-08-08', '2015-08-18', 'This is a test orde kindly ignore', 3),
(3, 'Rajendra', '2147483647', 'rajendra@kalptech.com', '2015-08-08', '2015-08-21', 'This is a testing order by rajendra', 3),
(5, 'Om prakash', '2147483647', 'om.maurya0207@gmail.com', '2015-08-10', '2015-08-20', 'Test note by op on this order........', 3),
(6, 'Arti', '2147483647', 'kalpesh@kalptech.com', '2015-08-10', '2015-08-22', 'This is a test orde kindly ignore', 3),
(7, 'Sunil', '2147483647', 'sunil@kalptech.com', '2015-08-11', '2015-08-05', 'Hello', 3),
(8, 'Rajendra', '2147483647', 'rajendra@kalptech.com', '2015-08-13', '2015-08-21', 'This is a testing order by rajendra', 3),
(9, 'Rajendra', '9619388096', 'rajendra@kalptech.com', '2015-08-13', '2015-08-26', 'This is a testing order by rajendra', 3),
(10, 'Rikesh', '9820434383', 'kalpesh@kalptech.com', '2015-08-13', '2015-08-31', 'This is a test orde kindly ignore', 3),
(11, 'Kevin', '7187571384', 'Kevin.borgersen@gmail.com', '2015-08-14', '2015-08-31', 'Kevin test', 3),
(12, 'Barbara Ann', '7189661649', 'Babalina1@aol.com', '2015-08-14', '2015-08-25', 'Send paypal request', 3),
(13, 'Diane', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-25', 'No name on board', 2),
(14, 'Melissa Farro', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-26', 'No name on either board-the word my in same size lettering', 2),
(15, 'Christina', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-26', 'Also ordered memory box', 2),
(16, 'Mara', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-26', 'Vinny, Johnny', 2),
(17, 'Nicole', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-27', 'Danny, Michael', 2),
(18, 'Strizzy', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-27', 'Alexis..sent paypal request condoggs143@aol.com...ship to Connie Alexiadis 35 Francis Terrace Glen Cove NY 11542...added 5.00 for shipping', 2),
(19, 'Michelle', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-27', 'Anthony', 2),
(20, 'Jennifer', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-28', 'Lt blue and white Jack', 2),
(21, 'Gina Marie', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-27', 'Lt blue and white Peter Andrea', 2),
(22, 'Barbara Ann', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-26', '2 school boards 1-first day of school 1-last day of school in pastel colors Emma Arlene sent pay pal request Babalina1@aol.com', 2),
(23, 'Cathy', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-28', '3 back back to school boards Brianna, Alex, Daniela', 2),
(24, 'Daniela', '7189661649', 'thecoolys@aol.com', '2015-08-14', '2015-08-28', '2 birth boards Giuliana Francesca, Alexandra Maria...if both names dont fit one name is ok', 2),
(25, 'Rajendra', '9619388096', 'rajendra@kalptech.com', '2015-08-25', '2015-08-30', 'This is a test inquiry...', 1),
(26, 'Christine DeFonte', '7187571384', 'Kevin.borgersen@gmail.com', '2015-09-17', '2015-09-23', 'I would like to order these two boards', 1),
(27, 'Josephine', '9178264448', 'Scalajo@aol.com', '2015-11-02', '2015-11-11', 'Hi Lisa, I would like a merry mail and stocking holder with 5 hooks. Both in red.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_property`
--

CREATE TABLE IF NOT EXISTS `order_property` (
  `order_property_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_detail_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `property_value_id` int(11) NOT NULL,
  PRIMARY KEY (`order_property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=56 ;

--
-- Dumping data for table `order_property`
--

INSERT INTO `order_property` (`order_property_id`, `order_detail_id`, `property_id`, `property_value_id`) VALUES
(1, 1, 36, 399),
(2, 1, 37, 402),
(3, 2, 46, 228),
(4, 2, 47, 230),
(5, 2, 48, 409),
(6, 3, 36, 398),
(7, 3, 37, 402),
(8, 4, 27, 62),
(9, 4, 28, 65),
(10, 4, 29, 69),
(11, 6, 60, 407),
(12, 8, 36, 397),
(13, 8, 37, 401),
(14, 9, 43, 285),
(15, 9, 44, 288),
(16, 10, 67, 410),
(17, 11, 43, 285),
(18, 11, 44, 288),
(19, 12, 67, 410),
(20, 14, 36, 397),
(21, 14, 37, 401),
(22, 15, 27, 62),
(23, 15, 28, 65),
(24, 15, 29, 69),
(25, 16, 36, 397),
(26, 16, 37, 401),
(27, 17, 27, 62),
(28, 17, 28, 65),
(29, 17, 29, 69),
(30, 18, 27, 62),
(31, 18, 28, 65),
(32, 18, 29, 69),
(33, 19, 36, 397),
(34, 19, 37, 401),
(35, 20, 27, 62),
(36, 20, 28, 65),
(37, 20, 29, 69),
(38, 21, 67, 410),
(39, 29, 67, 410),
(40, 30, 67, 410),
(41, 33, 67, 411),
(42, 34, 39, 340),
(43, 34, 40, 343),
(44, 34, 41, 346),
(45, 35, 43, 286),
(46, 35, 44, 288),
(47, 35, 41, 346),
(48, 36, 39, 340),
(49, 36, 40, 343),
(50, 36, 41, 346),
(51, 37, 43, 286),
(52, 37, 44, 288),
(53, 37, 41, 346),
(54, 38, 68, 413),
(55, 41, 73, 427);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
