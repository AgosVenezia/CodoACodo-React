function Peliculas() {
  let pagina = 1;

  const btnAnterior = (e)=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
}

    const btnSiguiente = (e)=>{
        if(pagina < 1000){
            pagina += 1;
            cargarPeliculas();
        }
  }

  // estilo de promesa async await: proceso de hacer un asincronismo y estar a la espera de esa información. Apertura del asincronismo.
  const cargarPeliculas = async() => { // async es único, await puede haber varios

    try{
        // el fetch es el encargado de esperar la llegada de la información/respuesta. El asincronismo de ese await lo dispara cargarPeliculas (solicitud del llamado)
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);
        console.log(respuesta);

        // todo esto ocurre en un asincronismo porque los procesos van a demorar
        if(respuesta.status === 200){ // 200 es el codigo de la respuesta ok
            const datos = await respuesta.json(); // await por espera de conversión a json

            let peliculas = "";
            datos.results.forEach(pelicula => { // pelicula es variable de iteración dentro de películas
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" >
                        <h3 class="titulo"> ${pelicula.title} </h3>
                        <p>${pelicula.overview} </p>
                    </div>
                
                `; // las basticks concatenan strings y variables
            }); 
        
            document.getElementById("contenedor").innerHTML = peliculas;  
        }

        //verificación de mensaje de error para dar al usuario
        else if(respuesta.status === 401){console.log("key incorrecta");}
        else if(respuesta.status === 404){console.log("no disponible");}
        else {console.log("no tengo idea del error")}
    }

    catch(error){
        console.log(error.message);
        //acciones por si no funciona
    }
  }  

  cargarPeliculas();

  return (
    <div className="export">
        <div className="contenedor" id="contenedor"></div>
        <div className="paginacion">
            <button onClick={btnAnterior}>Anterior</button>
            <button onClick={btnSiguiente} id="btnSiguiente">Siguiente</button>
        </div>
    </div>
  )
}

export default Peliculas;
