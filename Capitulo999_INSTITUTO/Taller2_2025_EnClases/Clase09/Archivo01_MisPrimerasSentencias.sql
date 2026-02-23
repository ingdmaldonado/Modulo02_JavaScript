
/* AQUI VAMOS A COMENZAR A PROBAR
NUESTRAS PRIMERAS SENTENCIAS SQL */

/* 01 - SELECT 

	ES LA INSTRUCCIÓN SQL QUE ME PERMITE
	RECUPERAR DATOS DESDE UNA O MAS TABLAS
	DE UNA BASE DE DATOS.

*/

	select * from alumnos;
	
	
/* 02 - INSERT => insertar datos 
en una tabla */

	insert into alumnos (dni,nombre,domicilio) values (44219694,'NICOLAU VALENTIN','SAN ANTONIO CENTER');
	
	insert into alumnos (dni,nombre,domicilio) values (35208704,'AGUERO IVAN GABRIEL','LA TERCENA');
	insert into alumnos (dni,nombre,domicilio) values (45457671,'AGUERO VALENTINA','VALLE VIEJO BAÑADO');


/* 03 - DELETE => elimina datos de una tabla 
a pedido de ANAEL
*/

	delete from alumnos
		where
			dni = 44219694;
			
/* 04 - UPDATE */

	select * from alumnos;
	
	insert into alumnos (dni,nombre,domicilio) values (44219999,'NICOLAU RAMON','SAN ANTONIO CENTER');
	

	