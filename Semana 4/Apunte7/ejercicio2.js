class Persona {
    constructor(nombre, correo, profesion, fechaNacimiento) {
        this.nombre = nombre;
        this.correo = correo;
        this.profesion = profesion;
        this.fechaNacimiento = fechaNacimiento;
    }
    saludar() {
        console.log('Hola, soy ' + this.nombre)
    }
    edad() {
        const fechaActual = new Date();
        return fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
    }
}

const arrayPersonas = [
    new Persona('Juan', 'juan@example.com', 'Ingeniero', new Date('1990-01-01')),
    new Persona('María', 'maria@example.com', 'Diseñadora', new Date('1985-05-15')),
    new Persona('Pedro', 'pedro@example.com', 'Desarrollador', new Date('1992-12-10')),
    new Persona('Ana', 'ana@example.com', 'Arquitecta', new Date('1988-08-20')),
    new Persona('Luis', 'luis@example.com', 'Medico', new Date('1987-03-25')),
    new Persona('Sofia', 'sofia@example.com', 'Enfermera', new Date('1990-07-12')),
    new Persona('Carlos', 'carlos@example.com', 'Cientifico', new Date('1989-11-30')),
    new Persona('Laura', 'laura@example.com', 'Psicologa', new Date('1986-09-18'))
];

function personasMayoresDeEdad(array) {
    const personasMayores = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad() >= 18) {
            personasMayores.push(array[i]);
        }
    }
    return personasMayores;
}

function hallarPersonaXProfesion(array, profesion) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].profesion === profesion) {
            return array[i];
        }
    }
    return null;
}

function personMasGrande(array) {
    let personaMasGrande = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].edad() > personaMasGrande.edad()) {
            personaMasGrande = array[i];
        }
    }
    return personaMasGrande;
}

function obtenerProfesionesUnicas(array) {
    const profesionesUnicas = [];
    for (let i = 0; i < array.length; i++) {
        if (!profesionesUnicas.includes(array[i].profesion)) {
            profesionesUnicas.push(array[i].profesion);
        }
    }
    return profesionesUnicas;
}


console.log("Personas mayores de edad:");
console.log(personasMayoresDeEdad(arrayPersonas));

console.log("Persona con la profesión de 'Ingeniero':");
console.log(hallarPersonaXProfesion(arrayPersonas, 'Ingeniero'));

console.log("Persona más grande:");
console.log(personMasGrande(arrayPersonas));

console.log("Profesiones únicas:");
console.log(obtenerProfesionesUnicas(arrayPersonas));

export { Persona, arrayPersonas, personasMayoresDeEdad, hallarPersonaXProfesion, personMasGrande, obtenerProfesionesUnicas };

