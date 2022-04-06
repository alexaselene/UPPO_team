-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mariaharo_database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mariaharo_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mariaharo_database` DEFAULT CHARACTER SET utf16 ;
USE `mariaharo_database` ;

-- -----------------------------------------------------
-- Table `mariaharo_database`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`usuarios` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(500) NOT NULL,
  `nombre_apellidos` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mariaharo_database`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mariaharo_database`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `caracteristicas` TEXT(200) NOT NULL,
  `precio_producto` INT NOT NULL,
  `stock` INT NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categoria_idcategoria`),
  INDEX `fk_productos_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mariaharo_database`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `total` DOUBLE NOT NULL,
  `usuarios_idusuario` INT NOT NULL,
  PRIMARY KEY (`idpedido`, `usuarios_idusuario`),
  INDEX `fk_pedido_usuarios1_idx` (`usuarios_idusuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mariaharo_database`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`administradores` (
  `idadministradores` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(80) NOT NULL,
  `contraseña` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idadministradores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mariaharo_database`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mariaharo_database`.`detalle_pedido` (
  `iddetalle_pedido` INT NOT NULL AUTO_INCREMENT,
  `precio_unitario` DOUBLE NOT NULL,
  `cantidad` INT NOT NULL,
  `productos_idproductos` INT NOT NULL,
  `pedido_idpedido` INT NOT NULL,
  `pedido_usuarios_idusuario` INT NOT NULL,
  PRIMARY KEY (`iddetalle_pedido`, `productos_idproductos`, `pedido_idpedido`, `pedido_usuarios_idusuario`),
  INDEX `fk_detalle_pedido_productos1_idx` (`productos_idproductos` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_pedido1_idx` (`pedido_idpedido` ASC, `pedido_usuarios_idusuario` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
