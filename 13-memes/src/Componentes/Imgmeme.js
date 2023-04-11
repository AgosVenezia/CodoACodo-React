/*
useState es un hook de React que permite a los componentes de React tener un estado interno. El estado de un componente es cualquier dato que pueda cambiar durante la vida útil del componente. Con useState, se puede declarar una variable de estado en un componente de React y modificarla a través de funciones que actualizan su valor. Además, cuando el valor de la variable de estado cambia, React vuelve a renderizar el componente, actualizando así la interfaz de usuario.
*/

import React, {useState} from 'react';

const Imgmeme = () => {

    const [textmeme, setTextmeme] = useState();

    const textomeme = (e) =>{
        setTextmeme(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <h1>Editá tu propio meme</h1>

        <h2>Escribí tu texto</h2>
        <input onChange={textomeme} className="" type="text" placeholder="Poné tu frase" name="meme"/>

    </div>
  )
}

export default Imgmeme;
