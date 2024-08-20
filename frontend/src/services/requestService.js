export const getAllRequest = async (pageSize, pageNumber) => {
  try {
    const url = new URL(import.meta.env.VITE_URL_GET_ALL_REQUEST);
    url.searchParams.append("pageSize", pageSize);
    url.searchParams.append("pageNumber", pageNumber);

    let options = {
      method: "GET",
    };

    let res = await fetch(url, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio obtener todas las solicitudes:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const createRequest = async (
  code,
  description,
  summary,
  id_employee
) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        description,
        summary,
        id_employee
      }),
    };

    console.log(summary,"service")

    let res = await fetch(import.meta.env.VITE_URL_CREATE_REQUEST, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio crear registro:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const deleteRequest = async (id) => {
  try {
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };

    let res = await fetch(import.meta.env.VITE_URL_DELETE_REQUEST, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio obtener todos los empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const editRequest = async (code, description, summary, id) => {
  try {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        description,
        summary,
        id,
      }),
    };

    let res = await fetch(import.meta.env.VITE_URL_UPDATE_REQUEST, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error("Error en el servicio editar empleados:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};

export const searchRequest = async (name) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    };

    let res = await fetch(import.meta.env.VITE_URL_SEARCH_REQUEST, options);

    let json = await res.json();
    return { status: res.status, data: json };
  } catch (error) {
    console.error(
      "Error en el servicio obtener de obtener empleado filtrado:",
      error
    );
    return { status: 500, message: "Internal Server Error" };
  }
};
