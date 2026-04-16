export default class Post {
    constructor(post) {
        this.userID = post.userId;
        this.id = post.id;
        this.titulo = post.title;
        this.cuerpo = post.body;
    }

    
}

/*
export default class Usuario {
    constructor(user) {
        this.numero = user.id;
        this.nombre = user.name;
        this.nombreAcceso = user.username;
        this.correo = user.email;
    }
    //NO PONER EL FUNCTION ADELANTE PORQUE ESTOY DENTRO DE UNA CLASE
    mostrar(){
        return `Usuario: ${this.nombre} [${this.numero}]`;
        }
    }

    //pongo el default porque es lo unico que tiene el archivo
*/