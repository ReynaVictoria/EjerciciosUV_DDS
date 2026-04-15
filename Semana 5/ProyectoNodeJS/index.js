console.log("Hola mi Mundo");

//como hizo para que lo haga como el go live??

//hacer algun script de practica si o si

/* 
EN JS TODO SON OBJETOS

codigo sincrono: se ejecuta paso a paso, secuencial en mi ambito de ejecucion
codigo asincrono: cuando accedes a un recurso externo, depende de la rta de otro.

PREGUNTA EXAMEN
como ejecutarias algo despues de otro? --> CALLBACK
Equivalente a funciones de orden superior
Callback son funciones que se pasan como parametros a otras.

Los callback son la forma de gestionar el asincronismo

setTimeoout(()=>{console.log("B")},1000);
sirve para demorar --> pasa a ser asincronico

JS -> ST single thread, un solo hilo
Su ejecucion es como un while true que permanentemente controla que o se le acaba lo que tiene para ejecutar en la pila de llamadas o tiene alguna tarea en cola (osea no sincrona)


Promise
representa el resultado eventual de una operacion asincrona
Es un objeto
Puede estar pendiente, completada o rechazada

*/

function sumar(a, b, callback) {
    const result = a + b;
    callback(result);
}

function printResultado(result){
    console.log(`El resultado es ${result}`);}

sumar(5, 3, printResultado);


console.log("A");
setTimeout(() => {console.log("B")},5000);

console.log("C");

//imprime A C B
