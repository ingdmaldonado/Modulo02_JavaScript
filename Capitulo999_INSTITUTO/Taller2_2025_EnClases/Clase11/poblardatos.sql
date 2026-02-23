

	/* INSERCION DE PRODUCTOS */

	insert into producto (productocodigo,productonombre)
		values ('AAXXZZ','FERNET BRANCA');
		
	
	insert into producto (productocodigo,productonombre)
		values ('AAXXZZ1000','COCA X 1500');
		
	
	insert into producto (productocodigo,productonombre)
		values ('ATTXYI','YERBA PLAYADITO');
		
		
	select * from producto;
	
	/* INSERCIÓN FROM SELECT INSERCIÓN MASIVA */
	insert into productoprecio
		(productopreciofecha,productoid,productoprecioprecio)
			select
				'16/11/2023',
				productoid,
				2200.25
					from producto;
					
	select * from productoprecio;
	
	/* INSERCIÓN DE CLIENTES */
	
	select * from cliente;
	
	insert into cliente (clientecuit,clientenombre,clientedomicilio)
		values
			('20376425399','CAFETTARO FEDERICO','EN SU CASA 1'),
			('27458818853','MIRANDA ESTANISLAO','Here instituto'),
			('20471928942','RODRIGUEZ JOAQUIN','BARRIO LA PAMPA')
			
	
	/* INSERCIÓN DE FACTURAS */
	
	
	truncate factura;
	
	insert into factura
		(facturanumero,facturafecha,clienteid)
			select
				row_number() over (order by clienteid desc) + 6 as numero,
				'22/01/2013',
				clienteid
					from cliente
						where
							clienteid > 1
						
					
							
	select * from factura
	
	
	select 
		*,
		row_number() over (order by clienteid desc) as numero
		from cliente
	
	
	/* VAMOS A POBLAR EL CUERPO DE LA TABLA FACTUARA */
	
		insert into facturaproducto
			(productoprecioid,cantidad,facturaid)
				select
					productoprecioid,
					3,
					2
						from productoprecio
							Where
								productoprecio.productoprecioid
									between
										2 and 5
					
			
			
		select * from productoprecio;
		select * from factura;
	
	
		select * from facturaproducto
					
	
	
	