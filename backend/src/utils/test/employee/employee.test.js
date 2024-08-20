import { app } from "../../../app";
import supertest from "supertest";
import { jest } from "@jest/globals";

const api = supertest(app);
jest.mock("../../../services/request/requestService");
jest.mock("../../../dao/request/requestDao");

const mockEmployee = {
  result: [],
  totalrecords: "",
};

describe("[routes / employees]", () => {
  beforeAll(async () => {
    let response = await api.get("/get-employees").query({
      pageNumber: 6,
      pageSize: 1,
    });

    response.body.result.map((el) => mockEmployee.result.push(el));
    mockEmployee.totalrecords = response.body.totalrecords;
  });

  test("should return all employees", async () => {
    const response = await api.get("/get-employees").query({
      pageNumber: 6,
      pageSize: 1,
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockEmployee);
    expect(response.body).toHaveProperty("totalrecords");
  });

  test("should return Employee created successfully", async () => {
    const createMockEmployee = {
      entry_date: "2024-08-13T05:00:00.000Z",
      name: "test",
      salary: "1.00",
    };

    const response = await api
      .post("/insert-employee")
      .send(createMockEmployee);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message");
  });

  test("should return Employee deleted successfully", async () => {
    const response = await api.delete("/delete-employee").send({
      id: mockEmployee.result.length > 0 ? mockEmployee.result[0].id : 1,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  test("should return Employee updated successfully", async () => {
    const updateMockEmployee = {
      entry_date: "2024-08-13T05:00:00.000Z",
      name: "test",
      salary: "1.00",
      id: mockEmployee.result.length > 0 ? mockEmployee.result[0].id : 1,
    };

    const response = await api.put("/update-employee").send(updateMockEmployee);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });
});
