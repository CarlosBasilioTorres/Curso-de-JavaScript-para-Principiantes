class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

var persona = new Persona("carlos","basilio",32);

/*const nombre = persona.nombre;
const apellido = persona.apellido;
const edad = persona.edad;
*/


const {nombre,apellido,edad} = persona;

console.log(nombre)
console.log(apellido)
console.log(edad)