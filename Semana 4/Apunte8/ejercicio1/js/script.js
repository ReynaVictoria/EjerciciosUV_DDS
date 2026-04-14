const ul = document.querySelector('.list-group');

ul.addEventListener('click', function(event) {
    // Verifico si hice click en un botón (o en el ícono dentro)
    const boton = event.target.closest('button');

    if (!boton) return; // si no es botón, no hago nada

    // Busco el li más cercano a ese botón
    const li = boton.closest('li');

    // Elimino ese li
    li.remove();
});

const u2 = document.querySelector('.list-group');
const input = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');

let contador = Date.name; // Contador de tareas

btnAgregar.addEventListener('click', function() {
    const texto = input.value.trim();

    if (texto === '') return; // evitar tareas vacías

    const id = "tarea" + contador++;

    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <div class="d-flex align-items-center gap-2">
            <input id="${id}" class="form-check-input m-0" type="checkbox">
            <label for="${id}" class="m-0">${texto}</label>
        </div>

        <button class="btn btn-danger" type="button">
            <i class="bi bi-x-circle"></i>
        </button>
    `;

    ul.appendChild(li);

    input.value = ''; // limpiar input
});