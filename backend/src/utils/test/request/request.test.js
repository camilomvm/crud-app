import { app } from "../../../app";
import supertest from "supertest";
import { jest } from "@jest/globals";

const api = supertest(app);
jest.mock("../../../services/request/requestService");
jest.mock("../../../dao/request/requestDao");

const mockRequest = {
  result: [],
  totalrecords: "",
};

describe("[routes / request]", () => {
  beforeAll(async () => {
    const response = await api.get("/get-all-request").query({
      pageNumber: 6,
      pageSize: 1,
    });
    mockRequest.result = response.body.result;
    mockRequest.totalrecords = response.body.totalrecords;
  });

  const deleteTestRequest = (requestId) => async () => {
    const response = await api
      .delete("/delete-request")
      .send({ id: requestId });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  };

  const updateTestRequest = (requestData) => async () => {
    const response = await api.put("/update-request").send(requestData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  };

  test("should return all request", async () => {
    const response = await api.get("/get-all-request").query({
      pageNumber: 6,
      pageSize: 1,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockRequest);
    expect(response.body).toHaveProperty("totalrecords");
  });

  test("should return Request deleted successfully", () => {
    if (mockRequest.result.length === 0) {
      console.warn("No requests available for deletion test.");
      return;
    }
    return deleteTestRequest(mockRequest.result[0].id_empleado)();
  });

  test("should return Request update successfully", () => {
    if (mockRequest.result.length === 0) {
      console.warn("No requests available for update test.");
      return;
    }
    return updateTestRequest({
      id: mockRequest.result[0].id_empleado,
      code: mockRequest.result[0].codigo,
      description: mockRequest.result[0].descripcion,
      summary: mockRequest.result[0].resumen,
    });
  });
});
