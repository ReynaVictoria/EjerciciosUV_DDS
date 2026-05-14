/*
function login(){

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            correo: document.getElementById('email').value,
            clave: document.getElementById('password').value
        })
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Login incorrecto");
        }
        return response.json();
    })
.then(data => {
    // guardar usuario en el navegador
    localStorage.setItem("usuario", JSON.stringify(data));

    // redirigir al home
    window.location.href = "index.html";
})    
    .catch(error => {
        console.log(error.message);
    });
}

*/


function login() {
    try { //lo usamos porque estamos accediento a un recurso local pero sigue siendo un recurso externo
        const url='http://localhost:3000/login';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const credenciales = {
        correo: email,
        clave: password
    };

    const respuesta = await fetch(url, { //al fetch le pasamos la url y otro objeto con parametros de configuracion
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credenciales) //esto es un objeto pero estoy mandando un json entonces lo convierto
    });  //stringify objeto a json
    if (!respuesta.ok){
        alert("Login incorrecto");
    } 
    else{
        const data = await respuesta.json(); //los datos vienen como json pero los levanto como objeto js
        localStorage.setItem("usuario", JSON.stringify(data)); //lo convierto de nuevo a cadena json para el localstorage asi lo puedo recuperar????
        window.location.href = "index.html"; //redirecciona a la pagina principal del html

    }
    }

    catch (error) {
        alert(error.message);        
    }


    }

// la diferencia entre ambos codigos:
// el await es mas legible, la version del profe esta mejor