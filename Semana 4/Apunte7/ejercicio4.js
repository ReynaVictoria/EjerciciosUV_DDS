import datos from './personas.json' with { type: 'json' };
import {Persona, personasMayoresDeEdad, hallarPersonaXProfesion, personMasGrande, obtenerProfesionesUnicas } from './ejercicio2.js';

//convertir los datos en personas
const personas = datos.map(dato => new Persona(dato.nombre, dato.correo, dato.profesion, new Date(dato.fechaNacimiento))); 


//personas mayores de edad
console.log("Personas mayores de edad:");
console.log(personasMayoresDeEdad(personas));

//persona con la profesion de ingeniero
console.log("Persona con la profesión de 'Ingeniero':");
console.log(hallarPersonaXProfesion(personas, 'Ingeniero'));

//persona mas grande
console.log("Persona más grande:");
console.log(personMasGrande(personas));

//profesiones unicas
console.log("Profesiones únicas:");
console.log(obtenerProfesionesUnicas(personas));