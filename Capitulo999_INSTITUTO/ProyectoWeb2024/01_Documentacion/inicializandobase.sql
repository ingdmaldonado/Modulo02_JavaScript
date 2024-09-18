
/***********************************/
/* INICIALIZANDO LA BASE DE DATOS. */
/***********************************/

-- (01) TABLA DEPARTAMENTOS --

	truncate table departamento restart identity;

	insert into departamento (departamentonombre) values ('FRAY MAMERTO ESQUIU');
	insert into departamento (departamentonombre) values ('VALLE VIEJO');
	
	select * from departamento;
	
-- (02) TABLA LOCALIDADES --

	truncate table localidad restart identity;
	
	insert into localidad (localidadcp,localidadnombre,departamentoid)
		values ('K4713','PIRQUITAS',1);
		
	insert into localidad (localidadcp,localidadnombre,departamentoid)
		values ('K4717','TERCENA',1);
		
	insert into localidad (localidadcp,localidadnombre,departamentoid)
		values ('K4712','CARRERA',1);
		
	insert into localidad (localidadcp,localidadnombre,departamentoid)
		values ('K4707','PIEDRA BLANCA',1);
		
	insert into localidad (localidadcp,localidadnombre,departamentoid)
		values ('K4708','SAN ANTONIO',1);

	select * from localidad;
	
-- (02) TABLA LOCALIDADES --

	truncate table cliente restart identity;
	
	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20123456789, 'Juan Pérez', 'Calle Falsa 123, Ciudad', 1);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27876543216, 'María Gómez', 'Av. Siempre Viva 742, Ciudad', 3);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20112233445, 'Carlos Rodríguez', 'San Martín 456, Ciudad', 4);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23998877664, 'Ana Martínez', 'Córdoba 789, Ciudad', 2);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20665544332, 'Roberto López', 'Belgrano 321, Ciudad', 5);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27445566778, 'Laura Fernández', 'Alsina 456, Ciudad', 1);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23556677889, 'Miguel Sánchez', 'Rivadavia 159, Ciudad', 3);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20334455661, 'Patricia Ramírez', 'Laprida 789, Ciudad', 2);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27778899003, 'Esteban García', 'Mitre 101, Ciudad', 4);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23112244337, 'Lucía Silva', 'Colón 202, Ciudad', 5);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20998877440, 'Sofía Núñez', 'Alvear 321, Ciudad', 1);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23667788992, 'Diego Castro', 'Guemes 456, Ciudad', 3);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27556677884, 'Elena González', 'Independencia 789, Ciudad', 2);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23998877661, 'Joaquín Álvarez', 'Sarmiento 123, Ciudad', 5);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20123443219, 'Victoria Ruiz', 'Pellegrini 456, Ciudad', 4);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23123443218, 'Gabriel Torres', 'Mitre 789, Ciudad', 1);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27098765437, 'Julia Molina', 'Urquiza 321, Ciudad', 2);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (20678945676, 'Martín Suárez', 'Belgrano 456, Ciudad', 3);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (23345632197, 'Emilia Ponce', 'San Lorenzo 789, Ciudad', 5);

	INSERT INTO cliente (clientecuit, clientenombre, clientedomicilio, localidadid)
	VALUES (27432176545, 'Fernando Romero', '9 de Julio 101, Ciudad', 4);

	select * from cliente

	
	
	
