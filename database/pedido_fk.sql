ALTER TABLE `mariaharo_database`.`pedido` 
ADD CONSTRAINT `fk_pedido_usuarios`
  FOREIGN KEY (`usuarios_idusuario`)
  REFERENCES `mariaharo_database`.`usuarios` (`idusuario`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;