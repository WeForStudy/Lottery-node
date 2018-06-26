/*
 Navicat MySQL Data Transfer

 Source Server         : l-node
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : tour

 Target Server Version : 80011
 File Encoding         : utf-8

 Date: 06/26/2018 14:41:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `_mysql_session_store`
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `tour_admin`
-- ----------------------------
DROP TABLE IF EXISTS `tour_admin`;
CREATE TABLE `tour_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
  `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `create_time` mediumtext NOT NULL COMMENT '被创建时间',
  `creator` varchar(20) NOT NULL COMMENT '创建人',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `type` int(11) NOT NULL COMMENT '类型',
  `status` int(11) DEFAULT NULL COMMENT '状态，是否被删（404为被删，300为异常，200为正常）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `tour_comment`
-- ----------------------------
DROP TABLE IF EXISTS `tour_comment`;
CREATE TABLE `tour_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(50) NOT NULL,
  `content` varchar(500) NOT NULL,
  `create_time` mediumtext NOT NULL,
  `extra_info` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `tour_guider`
-- ----------------------------
DROP TABLE IF EXISTS `tour_guider`;
CREATE TABLE `tour_guider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  `address` varchar(200) NOT NULL,
  `balance` decimal(8,2) DEFAULT NULL,
  `create_time` mediumtext,
  `card_no` varchar(13) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `tour_order`
-- ----------------------------
DROP TABLE IF EXISTS `tour_order`;
CREATE TABLE `tour_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `user_id` varchar(10) NOT NULL COMMENT '用户编号',
  `guider_id` varchar(16) NOT NULL COMMENT '导游编号，自增',
  `total_money` decimal(8,2) NOT NULL,
  `order_time` mediumtext NOT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `tour_user`
-- ----------------------------
DROP TABLE IF EXISTS `tour_user`;
CREATE TABLE `tour_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  `address` varchar(200) NOT NULL,
  `create_time` bigint(20) NOT NULL,
  `card_no` varchar(18) DEFAULT NULL,
  `balance` decimal(8,2) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
