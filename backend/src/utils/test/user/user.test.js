import { app } from "../../../app";
import supertest from "supertest";
import jwt from "jsonwebtoken"; // Importa la biblioteca para decodificar el token

const api = supertest(app);

let token = "";
let decodedTokenId = "";

const JWT_SECRET = process.env.SECRET_TOKEN_KEY; 

beforeAll(async () => {
  const authResponse = await api
    .post("/login")
    .send({ username: "camilo", password: "123456" });

  token = authResponse.body.token;

  const decodedToken = jwt.verify(token, JWT_SECRET);
  decodedTokenId = decodedToken.id;
});

const expectedUser = {
  id: 1,
  nombre: "camilo",
  apellido: "moreno",
  usuario: "camilo",
  rol_id: 1,
  rol: "administrador",
};

describe("[routes / find-user-by-id]", () => {
  test("should return user by id", async () => {
    const response = await api
      .get("/find-user-by-id")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: decodedTokenId, 
      });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(expectedUser);
  });
});
