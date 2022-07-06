

import Pelicula from './Pelicula';
import Pagewrapper from './pagewrapper';
import Paginacion from './paginacion';
import React, { useState } from "react";
import { useEffect } from 'react';

	function ListadoPeliculas() {

		 const [paginaActual, setPaginaActual] = useState(1);
		 const [peliculas, setPeliculas] = useState([]);

		const Total_X_PAGINA = 4;

		const buscarPeliculas=async()=>{
			let url ='https://lucasmoy.dev/data/react/peliculas.json';
			let respuesta = await fetch(url,);
			
			
			let json = await respuesta.json();
			setPeliculas(json);
		  }

		useEffect(() => {
			buscarPeliculas();
	    }, []);


		const getTotalPaginas = () => {
			return Math.ceil(peliculas.length/Total_X_PAGINA);
			
		}
	    
             let peliculasPorPagina = peliculas.slice(
				(paginaActual-1) * Total_X_PAGINA , 
				paginaActual * Total_X_PAGINA
			);


		return (

	
	<Pagewrapper>
	


	{peliculasPorPagina.map(pelicula =>
				<Pelicula titulo = {pelicula.titulo}
				calificacion = {pelicula.calificacion}
				director = {pelicula.director}
				actores = {pelicula.actores}
				fecha = {pelicula.fecha}
				duracion = {pelicula.duracion}
				img = {pelicula.img} 
				descripcion={pelicula.descripcion} >

				</Pelicula>
	)}

	<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) =>{
      setPaginaActual(pagina)
	}}>


	</Paginacion> 

	</Pagewrapper>
		);
  
}

export default ListadoPeliculas;
