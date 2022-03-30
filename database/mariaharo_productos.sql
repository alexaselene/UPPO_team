SELECT * FROM mariaharo_database.productos;
INSERT INTO productos( nombre, caracteristicas, precio_producto, stock, imagen, categoria_idcategoria)
VALUES ('Happy Doggo', 'Taza de color beige con asa color azul claro, tamaño mediano', 200, 3, 'URL', 1);

INSERT INTO productos( nombre, caracteristicas, precio_producto, stock, imagen, categoria_idcategoria)
VALUES ('Lunática', 'Taza de color blanco, texura rugosa, tamaño mediano', 250, 4, 'URL', 1);

INSERT INTO productos( nombre, caracteristicas, precio_producto, stock, imagen, categoria_idcategoria)
VALUES ('Ying Cat', 'Taza de color blanco con asa color rosa, tamaño mediano', 250, 3, 'URL', 1);
DELETE FROM `mariaharo_database`.`productos` WHERE (`idproductos` = '4') and (`categoria_idcategoria` = '1');
UPDATE `mariaharo_database`.`productos` SET `idproductos` = '4' WHERE (`idproductos` = '5') and (`categoria_idcategoria` = '1');
UPDATE `mariaharo_database`.`productos` SET `idproductos` = '5' WHERE (`idproductos` = '6') and (`categoria_idcategoria` = '1');

INSERT INTO productos( nombre, caracteristicas, precio_producto, stock, imagen, categoria_idcategoria)
VALUES ('Estilo Olmeca', 'Taza de color verde, estilo olmeca, asa color rojo,  tamaño mediano', 200, 2, 'URL', 1);

INSERT INTO productos( nombre, caracteristicas, precio_producto, stock, imagen, categoria_idcategoria)
VALUES ('Mood de lunes', 'Serigrafiada con diseño, mango e interior collage', 200, 3, 'URL', 1);