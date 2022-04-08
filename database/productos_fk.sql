ALTER TABLE `mariaharo_database`.`productos` 
ADD CONSTRAINT `fk_productos_categorias`
  FOREIGN KEY (`categoria_idcategoria`)
  REFERENCES `mariaharo_database`.`categoria` (`idcategoria`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;