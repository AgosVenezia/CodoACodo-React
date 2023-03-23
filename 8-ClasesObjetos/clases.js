class Animal{
    constructor(especie, nombreAnimal, alimentacion, domestico, tamaño){
        this.especie=especie;
        //this.especie="carnívoro"; // Inicializa a todos con el mismo valor
        this.nombreAnimal=nombreAnimal;
        this.alimentacion=alimentacion;
        this.domestico=domestico;
        this.tamaño=tamaño;
    }

    // GETTER para obtener, SETTER para modificar
    get verInfoAnimal(){ // CONCATENACIÓN
        //return `El animal elegido es un ${this.nombreAnimal} del grupo de los ${this.especie}, tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domestico} <br>`
        return `El animal es un ${this.nombreAnimal}, y ${this.domestico} es domesticable y come ${this.alimentacion}`
    }

    set modificacionAlimentacion(tipoAlimento){
        this.alimentacion=tipoAlimento;
    }
}

let perro = new Animal("mamifero", "canino", "carnivoro", "si", "mediano");
console.log(perro);
console.log(perro.especie);
document.write(perro.verInfoAnimal);

perro.modificacionAlimentacion="papas fritas";
document.write(perro.verInfoAnimal);

class Mamiferos extends Animal{
    constructor(especie, alimentacion, nombreAnimal, toleranciaTemp, medioVida){
        super(especie, alimentacion, nombreAnimal);
        this.toleranciaTemp=toleranciaTemp;
        this.habitat=medioVida; // Se puede usar el mismo nombre o no, pero es una buena práctica.
    }

    get verInfoMamifero(){
        //return `El animal elegido es un ${this.nombreAnimal}, y es de la especie ${this.especie} tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domestico}, el tigre ${this.toleranciaTemp} y vive en la ${this.habitat} <br>`
        return `El animal es de especie ${this.especie}, y su hábitat es ${this.habitat}`;
    }
}

//let gato = new Animal("mamifero", "felino", "carnivoros", "domesticable", "mediano");

let tigre= new Mamiferos("felino", "carnivoro", "canino", "menor a 10°", "selva");
document.write(tigre.verInfoMamifero);

/*
perro.modificacionAlimentacion="hervivoro";
console.log(perro.alimentacion);
document.write(perro.verInfoAnimal);

let cadena = new String ("hola");
document.write(cadena);
*/