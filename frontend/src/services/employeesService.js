import { formatDateToIso } from "../helpers/formatDate";

export const getAllEmployes = async (pageSize, pageNumber) => {
  try {
    const url = new URL(import.meta.env.VITE_URL_GET_EMPLOYEES);
    url.searchParams.append("pageSize", pageSize);
    url.searchParams.append("pageNumber", pageNumber);

    let options = {
      method: "GET",
    };

    let res = await fetch(url, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio obtener todos los empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const addEmployee = async (startDate, name, salary) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entry_date: formatDateToIso(startDate),
        name,
        salary,
      }),
    };

    let res = await fetch(import.meta.env.VITE_URL_INSERT_EMPLOYEE, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio crear empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const editEmployee = async (startDate, name, salary, id) => {
  try {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entry_date: startDate,
        name,
        salary,
        id,
      }),
    };

    let res = await fetch(import.meta.env.VITE_URL_UPDATE_EMPLOYEE, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio editar empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const deleteEmployee = async (id) => {
  try {
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };

    let res = await fetch(import.meta.env.VITE_URL_DELETE_EMPLOYEE, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio obtener todos los empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};


export const searchEmployee = async (name) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name}),
    };

    let res = await fetch(import.meta.env.VITE_URL_SEARCH_EMPLOYEE, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio obtener de obtener empleado filtrado:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

