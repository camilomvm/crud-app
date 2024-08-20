import { app } from "../../../app";
import supertest from "supertest";

const api = supertest(app);

let token = "";

beforeAll(async () => {
  const authResponse = await api
    .post("/login")
    .send({ username: "camilo", password: "123456" });

  token = authResponse.body.token;
});

describe("[routes / register-user]", () => {
  test("should return a successful register", async () => {
    let response = await api.post("/register-user").send({
      name: "test",
      lastname: "test",
      password: "123",
      username: "test123",
      rol_id: 1,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message");
  });

  test("should return a 400 bad request", async () => {
    let response = await api.post("/register-user").send({
      name: "test",
      lastname: "test",
      password: "123",
      username: "",
      rol_id: 1,
    });


    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});
