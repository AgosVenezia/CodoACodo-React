// Axios: estructura simplificada y de fácil acceso
import axios from "axios";
import { useEffect, useState } from "react";

export const Appi = () => {
  
  // Variable de estado. data es la variable y setData es la función encargada de manipular esa variable
  const [data , setData] =useState([]) // Array inicializado

  useEffect(() => {
    getMovies() // funcionalidad para el asincronismo / bajada de la información
  }, [])
 

  // Solo fetch 

  // async  function getMovie() {
  //   const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
  //   const responseData =  await response.json()
  //   setData(responseData.results)
  //   console.log(data)
  // }

  
  // Metodo fetch aplicando .then()
  // Se pide por el fetch la url, .then para la conversión a json, pasárselo a la variable de estado, y .catch para validar algún error. 

  // function getMovie() {
  //   fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setData(responseData.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  
  // Con Axios 

  // async function getMovies() {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1'
  //   );
  //   setData(response.data.results);
  // }


  // Axion con .then()

  function getMovies() { // Función encargada de hacer el asincronismo con la API y traernos la información.
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1') // Método GET a la url. Suprime el fetch.
      .then((response) => { // Variable para pasarle el resultado a la variable de estado
        setData(response.data.results); // setData se encarga de guardar y pasar el resultado a la variable de estado
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

    <div>
      { 
        data.map((item) => ( // data.map hace el recorrido del array e item es la variable de iteración
          <div key={item.id} >{item.title}</div>
        //<div key={item.id} >{item.overview}</div>
        ))
      }
    </div>
  );
};