import request from "supertest";
import Test from "supertest/lib/test";


const api = request("https://jsonplaceholder.typicode.com") //URL BASE

//TODOS LOS TEST SE ESCRIBEN DENTRO DE UN BLOQUE

describe("jsonplaceholder API - Tests simples con supertest", () => {
    test("GET /post/1 devuelve post exitosamente", async () => {
        //Arrange:preparacion previa, todo lo necesario para llamar a la API
        const postId = 1

        //Act: accion real, es este caso llamada a la API
        const response = await api.get(`/posts/${postId}`)


        //Assert: verificacion del resultado del Act
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toContain("application/json")
        expect(typeof response.body.title).toBe("string")
        expect(typeof response.body.body).toBe("string")

    })

    test("GET /posts devuelve una lista de posts", async () => {
        const response = await api.get("/posts")

        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body).toHaveLength(100)
    })

    test("GET /users/1 devuelve datos basicos del usuario", async () => {
        const response = await api.get("/users/1")

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        })
    })

})



