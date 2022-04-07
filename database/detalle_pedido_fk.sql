ALTER TABLE `mariaharo_database`.`detalle_pedido` 
ADD CONSTRAINT `fk_detalle_pedido_producto`
  FOREIGN KEY (`productos_idproductos`)
  REFERENCES `mariaharo_database`.`productos` (`idproductos`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_detalle_pedido_pedido`
  FOREIGN KEY (`pedido_idpedido`)
  REFERENCES `mariaharo_database`.`pedido` (`idpedido`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;