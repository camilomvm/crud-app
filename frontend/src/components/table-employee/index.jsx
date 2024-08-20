import React, { useEffect, useState } from "react";
import "./style.css";
import {
  getAllEmployes,
  deleteEmployee,
  searchEmployee,
} from "../../services/employeesService";
import { Pagination } from "../render-pagination";
import { formatDate } from "../../helpers/formatDate";
import { useAppContext } from "../../context/useAppContext";
import SearchInput from "../search-input";
import SpinnerLoader from "../spinner-loader/index";
import Modal from "../modal";

const TableEmployee = () => {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteringEmployee, setFilterEmployee] = useState("");
  const [deleteEmp, setDeleteEmployee] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const { state, setInsertData, setEditEmployee } = useAppContext();
  const [deleteId, setDeleteId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const recordsPerPage = 6;

  useEffect(() => {
    const getEmployees = async () => {
      let res = await getAllEmployes(currentPage, recordsPerPage);
      console.log(res)
      setLoading;
      if (res.status === 200) {
        setInsertData(false);
        setEditingUserId(null);

        if (res.data.result.length === 0 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }

      setData(res.data.result);

      if (filteringEmployee.length > 2) {
        let filter = await searchEmployee(filteringEmployee);
        setLoading(true);
        setTotalRecords(0);
        setData(filter.data);
      } else {
        setTotalRecords(res.data.totalrecords);
        setData(res.data.result);
      }
      setLoading(false);
    };

    getEmployees();
  }, [currentPage, deleteEmp, state.insertData, filteringEmployee]);

  const deleteEmploye = async (id) => {
    if (loading) return;

    setLoading(true);
    let res = await deleteEmployee(id);
    if (res.status === 200) {
      setDeleteEmployee(!deleteEmp);
    }

    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (user) => {
    if (editingUserId === user.id) {
      setEditEmployee(null);
      setEditingUserId(null);
    } else {
      setEditEmployee(user);
      setEditingUserId(user.id);
    }
  };

  const MessageDelete = () => {
    return (
      <>
        <p style={{ textAlign: "justify" }}>
          Si eliminas este empleado se eliminaran todos sus registros
        </p>
        <p style={{ fontWeight: "bold" }}>
          ¿Estás seguro de eliminar este empleado?
        </p>
      </>
    );
  };

  return (
    <div className="table-container">
      <Modal
        isOpen={isModalOpen}
        handleFunct={() => {
          deleteEmploye(deleteId);
          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
        children={<MessageDelete />}
      />
      <SearchInput onSearch={(e) => setFilterEmployee(e)} />
      {loading && <SpinnerLoader />}
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>fecha ingreso</th>
            <th>Name</th>
            <th>salario</th>
            {state.homeUser.rol_id === 1 && <th>acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{formatDate(user.fecha_ingreso)}</td>
                <td>{user.nombre}</td>
                <td>{user.salario}</td>
                {state.homeUser.rol_id === 1 && (
                  <td>
                    {editingUserId === user.id ? (
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(user)}
                      >
                        Cancelar
                      </button>
                    ) : (
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(user)}
                      >
                        Editar
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => {
                        setDeleteId(user.id);
                        setIsModalOpen(true);
                      }}
                      disabled={loading}
                    >
                      Eliminar
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-records">
                No hay registros
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TableEmployee;
