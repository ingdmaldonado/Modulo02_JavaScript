

	/* vamos a ver los clientes */
	
		select * from cliente;
		
	/* vamos a ver la tabla producto */
	
		select * from producto;
		
	/* producto precio */
	
		select * from productoprecio;
		
		
	/* factura */
	
		select * from factura;
		
	/* facturaproducto */
	
		select * from facturaproducto;
		
	/* consultas de combinación 
		combinar los productos y sus precios
	*/
	

	/* 01) Combinación de Productos y precios */
	
		select
			producto.*,
			productoprecio.*
				from producto
					inner join productoprecio
						on
							producto.productoid = productoprecio.productoid
								where
									producto.productocodigo = 'AAXXZZ'
							
	/* (02) Combinación de Productos y precios 
	ordenados por producto */
	
		select
			producto.*,
			productoprecio.*
				from producto
					inner join productoprecio
						on
							producto.productoid = productoprecio.productoid
								order by 
									producto.productoid
	
	/* (03) Combinación de Productos y precios 
		ordenado por producto y por precio descendente
	*/		
	
		select
			producto.*,
			productoprecio.*
				from producto
					inner join productoprecio
						on
							producto.productoid = productoprecio.productoid
								order by 
									producto.productoid,
									productoprecio.productoprecioprecio desc
	
							
	/* cuantos precios tuvo un producto */
	
	
		select
			producto.*,
			productoprecio.*
				from producto
					inner join productoprecio
						on
							producto.productoid = productoprecio.productoid
								where
									productoprecio.productopreciofecha between '01-01-2026' and '31-12-2027'
								order by 
									producto.productoid,
									productoprecio.productoprecioprecio desc
	
	
		Select
			productoprecio.productoid,
			count(*) as cantidad
				from productoprecio
					where
						productoprecio.productopreciofecha between '01-01-2026' and '31-12-2027'
							group by 
								productoprecio.productoid
									order by productoprecio.productoid
									
									
		/* Vamos a obtener la Cantidad de Precios que tiene un producto
		y vamos a obtener el precio total y el precio promedio */
		
		Select
			productoprecio.productoid,
			count(*) as CantidadPrecios,
			Sum(productoprecio.productoprecioprecio) as AcumulacionPrecios,
			Avg(productoprecio.productoprecioprecio) as PrecioPromedio,
			max(productoprecio.productoprecioprecio) as PrecioMasAlto,
			min(productoprecio.productoprecioprecio) as PrecioMasBajo
				from productoprecio
					where
						productoprecio.productoid in (1,3) -- filtros sobre columnas existentes
					group by 
						productoprecio.productoid -- aqui no van columnas calculadas
							having
								max(productoprecio.productoprecioprecio) < 15000 -- filtros sobre columnas calculadas
								
		
		
		/* Vamos a obtener estos Datos y cruzarlos con su ID 
		para obtener los datos del producto */
		
		Select
			InfoProductos.*,
			producto.*
				from
					(
					Select
						productoprecio.productoid,
						count(*) as CantidadPrecios,
						Sum(productoprecio.productoprecioprecio) as AcumulacionPrecios,
						Avg(productoprecio.productoprecioprecio) as PrecioPromedio,
						max(productoprecio.productoprecioprecio) as PrecioMasAlto,
						min(productoprecio.productoprecioprecio) as PrecioMasBajo
							from productoprecio
								where
									productoprecio.productoid in (1,3) -- filtros sobre columnas existentes
										group by 
											productoprecio.productoid -- aqui no van columnas calculadas
												having
													max(productoprecio.productoprecioprecio) < 15000 -- filtros sobre columnas calculadas
					) InfoProductos
						inner join producto
							on
								InfoProductos.productoid = producto.productoid
		
		
		
	/* vamos a obtener el ultimo precio del producto */
	
	select * from productoprecio
		order by 
			productoprecio.productoid,
			productoprecio.productoprecioid asc
			
	-- con este query obtengo el precio actual del producto --
	select
		productoprecio.productoid,
		max(productoprecio.productoprecioid) as UltimoID
			from productoprecio
				group by
					productoprecio.productoid
					
					
	-- utilizare el query anterior, para convertirlo en un subquery y cruzarlo con los datos del producto --
	
	Select
		PrecioActual.*,
		producto.*
			from
				(
					select
						productoprecio.productoid,
						max(productoprecio.productoprecioid) as UltimoID
							from productoprecio
								group by
									productoprecio.productoid
				) PrecioActual
					inner join producto
						on
							PrecioActual.productoid = producto.productoid
		
		
		select * from cliente;
		select * from factura;
		select * from facturaproducto
		select * from producto;
		select * from productoprecio;
		
		
		/* COMBINACION MADRE DE MADRES */
		
			select
				factura.*,
				cliente.*,
				facturaproducto.*,
				productoprecio.*,
				facturaproducto.cantidad * productoprecio.productoprecioprecio as subTotal,
				producto.productonombre
					from factura
						inner join cliente
							on
								factura.clienteid = cliente.clienteid
						inner join facturaproducto
							on
								factura.facturaid = facturaproducto.facturaid
						inner join productoprecio
							on
								facturaproducto.productoprecioid = productoprecio.productoprecioid
								
						inner join producto
							on
								productoprecio.productoid = producto.productoid
									order by 
										factura.facturaid,
										facturaproducto.facturaproductoid
										
								
						
								
					
					
		
		
		
		
		
							
				
	
		
		
		
		
		
		
	