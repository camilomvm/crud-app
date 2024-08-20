import React, { useState, useEffect } from "react";
import {
  getAllRequest,
  deleteRequest,
  searchRequest,
} from "../../services/requestService";
import { formatDate } from "../../helpers/formatDate";
import { Pagination } from "../render-pagination";
import { useAppContext } from "../../context/useAppContext";
import SearchInput from "../search-input";
import "./style.css";

const TableRequest = () => {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isRequestDeleted, setIsRequestDelete] = useState(false);
  const [filteringRequest, setFilteringRequest] = useState("");
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [editingRequestId, setEditingRequestId] = useState(null);
  const recordsPerPage = 6;

  const { state, setEditRequest, setInsertData } = useAppContext();

  useEffect(() => {
    const getRequest = async () => {
      const res = await getAllRequest(currentPage, recordsPerPage);
      setLoading(true);
      if (res.status === 200) {
        setInsertData(false);
        setEditingRequestId(null);
        if (res.data.result.length === 0 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }

      setData(res.data.result);

      if (filteringRequest.length > 2) {
        let filter = await searchRequest(filteringRequest);
        setLoading(true);
        setTotalRecords(0);
        setData(filter.data);
      } else {
        setTotalRecords(res.data.totalrecords);
        setData(res.data.result);
      }

      setLoading(false);
    };
    getRequest();
  }, [currentPage, isRequestDeleted, state.insertData, filteringRequest]);

  const deleteRegisterRequest = async (id) => {
    if (loading) return;

    setLoading(true);
    let res = await deleteRequest(id);
    if (res.status === 200) {
      setIsRequestDelete(!isRequestDeleted);
    }
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (r) => {
    if (editingRequestId === r.id) {
      setEditRequest(null);
      setEditingRequestId(null);
    } else {
      setEditRequest(r);
      setEditingRequestId(r.id);
    }
  };

  const handleRowClick = (id) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  return (
    <div className="table-container">
      <div className="input-search-container">
        <SearchInput onSearch={(e) => setFilteringRequest(e)} />
      </div>
      <table className="data-request-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Fecha de Ingreso</th>
            <th>Salario</th>
            <th>Descripción</th>
            <th>Resumen</th>
            {state.homeUser.rol_id === 1 && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((r) => (
              <tr key={r.id} onClick={() => handleRowClick(r.id)}>
                <td>{r.id}</td>
                <td>{r.codigo}</td>
                <td>{r.nombre}</td>
                <td>{formatDate(r.fecha_ingreso)}</td>
                <td>{r.salario}</td>
                <td
                  id={`desc-${r.id}`}
                  className={
                    expandedRowId === r.id &&
                    r.descripcion &&
                    r.descripcion.length > 25
                      ? "expanded"
                      : "table-cell"
                  }
                >
                  {r.descripcion}
                </td>
                <td
                  id={`res-${r.id}`}
                  className={
                    expandedRowId === r.id && r.resumen && r.resumen.length > 25
                      ? "expanded"
                      : "table-cell"
                  }
                >
                  {r.resumen}
                </td>
                {state.homeUser.rol_id === 1 && (
                  <td>
                    {editingRequestId === r.id ? (
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(r)}
                      >
                        Cancelar
                      </button>
                    ) : (
                      <button
                        className="edit-button"
                        onClick={() => {
                          handleEditClick(r);
                          setEditRequest(r);
                        }}
                      >
                        Editar
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => {
                
                        deleteRegisterRequest(r.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-records">
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

export default TableRequest;
