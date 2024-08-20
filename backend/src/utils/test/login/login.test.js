import { app } from "../../../app";
import supertest from "supertest";

const api = supertest(app);

describe("[routes / employes]", () => {
  test("should return a token on successful login", async () => {
    let response = await api.post("/login").send({
      username: "camilo",
      password: "123456",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("refresh");
    expect(typeof response.body.token).toBe("string");
  });

  test("should return a 404 username not found", async () => {
    let response = await api.post("/login").send({
      username: "wronguser",
      password: "wrongpassword",
    });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("error");
  });

  test("should return a 401 Unauthorized", async () => {
    let response = await api.post("/login").send({
      username: "camilo",
      password: "123",
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });
});


