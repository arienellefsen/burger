CREATE TABLE `burgers` (
  `ID` int(11) NOT NULL,
  `burger_name` varchar(255) NOT NULL,
  `devoured` tinyint(1) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
