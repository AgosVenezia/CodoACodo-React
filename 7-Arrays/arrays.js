const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
ul = document.querySelector("ul");

/*
ForEach y Map: ambos recorren el array.
Map recorre el array, le aplica el proceso, lo modifica y devuelve un nuevo array que lo almacena en una variable.
*/
//ForEach
numeros.forEach((num)=>{ // Callback

    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
});

//Map
const multiplosDeDiez = numeros.map(multi => multi*10); // Cuando el proceso es uno solo, puedo omitir las llaves y los paréntesis
console.log(multiplosDeDiez);

const multiplosDeDiez2 = numeros.map((multiDos) =>{

    let resultado = multiDos*10;
    const li = document.createElement("li");
    li.textContent = resultado;
    ul.appendChild(li);

    return resultado; // Como hay un roceso con varias sentencias, lleva return.
});

console.log(multiplosDeDiez2);


/* Metodos

https://tutobasico.com/metodos-arrays-javascript/

https://francescricart.com/metodos-javascript/

https://es.javascript.info/array-methods

*/ 


// Filter: busca criterios dentro de un array y devuelve un nuevo array mediante una condición.
const entreNum = numeros.filter(numDos => numDos>2 && numDos<6);
//const entreNum = numeros.filter(numDos => numDos>7 && numDos<8); // Devuelve array vacio.
console.log(entreNum);

// Reduce: aplica una función a un acumulador y cada valor de ese array lo reduce a uno solo. Suma los valores.
// El callback recibe dos parámetros.
const contadorUnico = numeros.reduce((acumulador, itera)=>acumulador + itera);
console.log(contadorUnico);

// Sort: ordena elementos mediante una estructura condicional ternaria.
const orden = numeros.sort((a, b)=> a>b ? -1:1); // -1 si es true la primera condición, 1 si es false.
console.log(orden);
/* a>b es el criterio de verdad, lógica, como un if. 
Se va a cumplir por V o F.
Se comparan los valores de los dos parámetros a y b, y se testean para ponerlos en orden.
-1:1 orden descendente, 1:-1 ascendente. */