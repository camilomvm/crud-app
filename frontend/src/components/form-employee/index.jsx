import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/useAppContext";
import { addEmployee, editEmployee } from "../../services/employeesService";
import TableEmployee from "../table-employee/index";
import "./style.css";
import { formatDate, formatDateToIso } from "../../helpers/formatDate";

const FormEmployee = () => {
  const [entryDate, setEntryDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [salary, setSalary] = useState("");

  const { state, setInsertData, setEditEmployee } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!entryDate.trim() || !employeeName.trim() || !salary.trim()) {
      alert("Todos los campos son requeridos y no pueden estar vacíos.");
      return;
    }

    if (state.editEmployee !== null) {
      const {id} = state.editEmployee
      let res = await editEmployee(entryDate, employeeName, salary, id);
      setInsertData(true);
      setEditEmployee(null);
    } else {
      let res = await addEmployee(entryDate, employeeName, salary);
      if (res.status === 201) {
        setInsertData(true);
        return;
      }
    }
  };

  const onChangeEdit = () => {
    if (state.editEmployee !== null) {
      const { fecha_ingreso, nombre, salario } = state.editEmployee;
      setEntryDate(formatDateToIso(fecha_ingreso) || "");
      setEmployeeName(nombre || "");
      setSalary(salario || "");
    }
  };

  useEffect(() => {
    if (!state.setInsertData) {
      setEmployeeName("");
      setEntryDate("");
      setSalary("");
    }

    onChangeEdit();
  }, [state.editEmployee]);

  return (
    <>
      <div className="form-container-employee">
        <div className="form-employee-content">
          <h2>Registrar empleado</h2>
          <form className="form-employee" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="dateInput">Fecha de ingreso</label>
              <input
                type="date"
                id="dateInput"
                name="dateInput"
                value={entryDate}
                onChange={(e) => {
                  setEntryDate(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="employeeName">Nombre</label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                value={employeeName}
                onChange={(e) => {
                  setEmployeeName(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="salary">Salario</label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>
            <div className="input-group-">
              <button type="submit" className="employee-form-button">
                {state.editEmployee !== null ? "Editar" : "Insertar"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <TableEmployee />
    </>
  );
};

export default FormEmployee;
