import React, {useState} from "react";
import "./style.css";

export const Pagination = ({ totalRecords, recordsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    };
  

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button className="button-pagination"
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="container-pagination">
        {pageButtons}
      </div>
    );
  };