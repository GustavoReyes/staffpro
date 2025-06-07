CREATE DATABASE  IF NOT EXISTS `staffpro_db_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `staffpro_db_data`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: staffpro_db_data
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Human Resources'),(2,'Technology'),(3,'Finance'),(4,'Marketing');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `dni` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role` enum('superadmin','hr','chief','employee') DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  `work_day` int NOT NULL COMMENT 'jornada diaria, 30h, 40h',
  `work_hour` varchar(16) DEFAULT NULL COMMENT 'Horario Diario',
  `base_salary` decimal(12,2) NOT NULL COMMENT 'Salario Base',
  `position` varchar(45) DEFAULT NULL COMMENT 'Cargo',
  `hire_date` date DEFAULT NULL COMMENT 'fecha de contraracion',
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('1000','Alice Superadmin','alice.superadmin@example.com','superadmin',NULL,0,NULL,0.00,NULL,NULL),('1001','Maria Peréz','gcollins@mullen-stokes.biz','chief',1,0,NULL,0.00,NULL,NULL),('1002','Robert Lopez','bakercharles@gmail.com','hr',1,0,NULL,0.00,NULL,NULL),('1003','Donald Dillon','john79@anderson.com','hr',1,0,NULL,0.00,NULL,NULL),('1004','Melissa Hubbard','marilyn25@gmail.com','hr',1,0,NULL,0.00,NULL,NULL),('1005','Donna Stewart','valeriebailey@martin.com','chief',2,0,NULL,0.00,NULL,NULL),('1006','Tiffany Cervantes','franklinsteven@bennett-harmon.net','employee',2,0,NULL,0.00,NULL,NULL),('1007','Sean Hendricks','hannahkim@gmail.com','employee',2,0,NULL,0.00,NULL,NULL),('1008','Crystal Preston','danielpeck@hotmail.com','employee',2,0,NULL,0.00,NULL,NULL),('1009','Cole Johnson','dannyhernandez@walker.com','chief',3,0,NULL,0.00,NULL,NULL),('1010','Gary Barrett','nicholsonashley@alexander.com','employee',3,0,NULL,0.00,NULL,NULL),('1011','Robert Mccoy','rodneymartin@gmail.com','employee',3,0,NULL,0.00,NULL,NULL),('1012','Aaron Marks','gonzalezjulie@crawford-ward.info','employee',3,0,NULL,0.00,NULL,NULL),('1013','Jesus Scott','keithball@stephens.com','chief',4,0,NULL,0.00,NULL,NULL),('1014','Diane Gallegos','peterschris@walton.com','employee',4,0,NULL,0.00,NULL,NULL),('1015','Katie Bates','sarahlarson@smith.com','employee',4,0,NULL,0.00,NULL,NULL),('1016','Dr. Allison Hunter','tmckinney@yahoo.com','employee',4,0,NULL,0.00,NULL,NULL);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_requests`
--

DROP TABLE IF EXISTS `leave_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_dni` varchar(10) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` enum('pending','approved','rejected') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_requests`
--

LOCK TABLES `leave_requests` WRITE;
/*!40000 ALTER TABLE `leave_requests` DISABLE KEYS */;
INSERT INTO `leave_requests` VALUES (1,'1001','Sick Leave','2025-02-18','2025-02-19','approved'),(2,'1002','Sick Leave','2024-12-31','2025-01-02','rejected'),(3,'1003','Sick Leave','2025-04-08','2025-04-10','approved'),(4,'1004','Personal Leave','2025-01-25','2025-01-27','pending'),(5,'1005','Personal Leave','2025-03-21','2025-03-25','rejected'),(6,'1006','Personal Leave','2024-12-24','2024-12-26','pending'),(7,'1007','Vacation','2025-01-20','2025-01-23','rejected'),(8,'1008','Personal Leave','2025-01-26','2025-01-30','approved'),(9,'1009','Vacation','2025-02-24','2025-02-26','pending'),(10,'1010','Personal Leave','2025-01-08','2025-01-09','rejected'),(11,'1011','Personal Leave','2025-03-12','2025-03-15','approved'),(12,'1012','Vacation','2025-02-24','2025-03-03','pending'),(13,'1013','Vacation','2025-03-18','2025-03-24','rejected'),(14,'1014','Personal Leave','2025-03-04','2025-03-09','rejected'),(15,'1015','Vacation','2025-03-29','2025-04-03','pending'),(16,'1016','Vacation','2024-12-12','2024-12-16','approved');
/*!40000 ALTER TABLE `leave_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payroll`
--

DROP TABLE IF EXISTS `payroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_dni` varchar(10) DEFAULT NULL,
  `base_salary` decimal(12,2) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `bonus_1` decimal(12,2) DEFAULT NULL,
  `bonus_2` decimal(10,2) DEFAULT NULL,
  `bonus_3` decimal(12,2) DEFAULT NULL,
  `deductions` decimal(12,2) DEFAULT NULL,
  `irpf` decimal(12,2) DEFAULT NULL,
  `total` decimal(12,2) DEFAULT NULL,
  `seguridad_social` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll`
--

LOCK TABLES `payroll` WRITE;
/*!40000 ALTER TABLE `payroll` DISABLE KEYS */;
INSERT INTO `payroll` VALUES (1,'1001',3029.52,NULL,123.42,NULL,NULL,58.26,NULL,3094.68,NULL),(2,'1002',2777.02,NULL,146.09,NULL,NULL,85.52,NULL,2837.59,NULL),(3,'1003',3867.51,NULL,113.33,NULL,NULL,1.31,NULL,3979.53,NULL),(4,'1004',2490.78,NULL,282.81,NULL,NULL,134.57,NULL,2639.02,NULL),(5,'1005',3086.01,NULL,36.99,NULL,NULL,76.79,NULL,3046.21,NULL),(6,'1006',2807.98,NULL,238.83,NULL,NULL,52.36,NULL,2994.45,NULL),(7,'1007',4193.23,NULL,180.16,NULL,NULL,28.12,NULL,4345.27,NULL),(8,'1008',3664.55,NULL,276.92,NULL,NULL,110.52,NULL,3830.95,NULL),(9,'1009',2057.52,NULL,276.77,NULL,NULL,109.68,NULL,2224.61,NULL),(10,'1010',3206.48,NULL,182.40,NULL,NULL,16.96,NULL,3371.92,NULL),(11,'1011',3200.48,NULL,147.63,NULL,NULL,137.40,NULL,3210.71,NULL),(12,'1012',2502.64,NULL,99.24,NULL,NULL,1.75,NULL,2600.13,NULL),(13,'1013',3631.27,NULL,26.60,NULL,NULL,10.31,NULL,3647.56,NULL),(14,'1014',3145.21,NULL,242.55,NULL,NULL,128.80,NULL,3258.96,NULL),(15,'1015',2115.64,NULL,165.97,NULL,NULL,64.08,NULL,2217.53,NULL),(16,'1016',1912.81,NULL,24.01,NULL,NULL,58.00,NULL,1878.82,NULL);
/*!40000 ALTER TABLE `payroll` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-31 12:40:11
