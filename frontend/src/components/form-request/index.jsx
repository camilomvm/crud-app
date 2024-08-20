import React, { useState, useEffect } from "react";
import TableRequest from "../table-request";
import { createRequest } from "../../services/requestService";
import { useAppContext } from "../../context/useAppContext";
import { editRequest } from "../../services/requestService";
import "./style.css";

const FormRequest = () => {
  const [codeRequest, setCodeRequest] = useState("");
  const [idEmployee, setIdEmployee] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const { state, setInsertData, setEditRequest } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!codeRequest.trim() || !description.trim() || !summary.trim()) {
      alert("Todos los campos son requeridos y no pueden estar vacíos.");
      return;
    }

    if (state.editRequest !== null) {
      const { id } = state.editRequest;
      let res = await editRequest(codeRequest, description, summary, id);
      alert("Registro actualizado.");
      setInsertData(true);
      setEditRequest(null);
    } else {
      let res = await createRequest(
        codeRequest,
        description,
        summary,
        idEmployee
      );

      if (res.status === 201) {
        setInsertData(true);
        setCodeRequest("");
        setDescription("");
        setIdEmployee("");
        setSummary("");
        return;
      }

      if (res.status === 400) {
        alert("Todos los campos son requeridos");
        return;
      }

      if (res.status === 404) {
        alert("No hay ningun usuario con este ID");
        return;
      }
    }
  };

  const onChangeEdit = () => {
    if (state.editRequest !== null) {
      const { codigo, descripcion, resumen, id_empleado } = state.editRequest;
      setDescription(descripcion || "");
      setSummary(resumen || "");
      setCodeRequest(codigo || "");
      setIdEmployee(id_empleado);
    }
  };

  useEffect(() => {
    if (!state.setInsertData) {
      setCodeRequest("");
      setDescription("");
      setIdEmployee("");
      setSummary("");
    }

    onChangeEdit();
  }, [state.editRequest]);

  return (
    <>
      {state.homeUser.rol_id === 1 && (
        <div className="form-container-request">
          <h2>Formulario de Solicitud</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group-request">
              <label htmlFor="id_employee">ID empleado</label>
              <input
                type="number"
                id="id_employee"
                placeholder="ID de empleado"
                value={idEmployee}
                onChange={(e) => setIdEmployee(e.target.value)}
                disabled={state.editRequest ? true : false}
              />
            </div>
            <div className="input-group-request">
              <label htmlFor="codeEmployee">Código</label>
              <input
                type="text"
                id="codeEmployee"
                placeholder="Código de registro"
                value={codeRequest}
                onChange={(e) => setCodeRequest(e.target.value)}
              />
            </div>
            <div className="input-group-request">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                maxLength="50"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-group-request">
              <label htmlFor="summary">Resúmen</label>
              <textarea
                id="summary"
                maxLength="50"
                placeholder="Resúmen"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="input-group-request">
              <button
                type="submit"
                className="submit-button"
                onClick={() => setInsertData(false)}
              >
                {state.editRequest === null ? "Crear Registro" : "Editar"}
              </button>
            </div>
          </form>
        </div>
      )}
      <TableRequest />
    </>
  );
};

export default FormRequest;
