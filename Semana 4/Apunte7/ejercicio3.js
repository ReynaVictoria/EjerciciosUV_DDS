import { Persona, arrayPersonas, personasMayoresDeEdad, hallarPersonaXProfesion, personMasGrande, obtenerProfesionesUnicas } from './ejercicio2.js';

console.log("Personas mayores de edad:");
console.log(personasMayoresDeEdad(arrayPersonas));

console.log("Persona con la profesión de 'Ingeniero':");
console.log(hallarPersonaXProfesion(arrayPersonas, 'Ingeniero'));

console.log("Persona más grande:");
console.log(personMasGrande(arrayPersonas));

console.log("Profesiones únicas:");
console.log(obtenerProfesionesUnicas(arrayPersonas));

