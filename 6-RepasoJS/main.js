let num = 1, num2, num3 = "tres"; // Se puede declarar una variable inicializada con un valor, con un string o sin inicializar; todo junto o por separado
const array = [];

let array2 = ["Star Wars",
                123, 
                true,
                1 + 2,
                {nombre: "Laura", edad: 45},
                array3 = [1, 2, 3],
                function(){},
                ];

console.log(array2[2]); // true
console.log(array2[5][2]); // 3
console.log(array2[4].edad); // 45
console.log(array2.length); // 7
console.log({array2}); // Array en formato de objeto (JSON)


let comidas = ["pastas", "ensalada", "hamburguesa", "milanesa", "pollo al horno", "pizza", "papas fritas"]; // El punto y coma no es obligatorio pero si una buena práctica

console.log({comidas}); // Array en formato de objeto (JSON)

comidas.forEach((comidita, indice, array)=>{ // El primer parámetro es la función que se ejecuta cada vez que se itera sobre el array. Reemplazar nombre de variable comidas por comidita
    //console.log(comidita, indice, array);
    console.log({comidita});
    //document.write(`<li>${comidita}</li>`);
    document.write(comidita); // Retorna la lista de comidas en el HTML sin formato ni estilo
});

comidas.push("tengo hambre");
console.log(comidas);

let borrado = comidas.pop("pastas"); // Retorna el elemento eliminado del array. Aunque le indique otro, sólo borra el último elemento del array
console.log(borrado);
console.log(comidas);