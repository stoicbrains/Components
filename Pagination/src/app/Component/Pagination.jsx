"use client";
import React, { useState, useEffect } from "react";
import employees from "../assets/Data";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  if (!hydrated) {
    return <div>Loading...</div>;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentEmployees = employees.slice(start, end);

  return (
    <div className="bg-black w-[80%] mx-auto my-[3rem] p-4">
      {/* Table */}
      <table className="border-2 border-purple-600 w-full text-left">
        <thead>
          <tr className="bg-purple-200">
            <th className="border border-purple-600 px-4 py-2">Name</th>
            <th className="border border-purple-600 px-4 py-2">Salary</th>
            <th className="border border-purple-600 px-4 py-2">Company</th>
            <th className="border border-purple-600 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, id) => (
            <tr key={id} className="border">
              <td className="border border-purple-600 px-4 py-2">{employee.name}</td>
              <td className="border border-purple-600 px-4 py-2">₹{new Intl.NumberFormat("en-IN").format(employee.salary)}</td>
              <td className="border border-purple-600 px-4 py-2">{employee.company}</td>
              <td className="border border-purple-600 px-4 py-2">{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-3 mt-4">
        <button
          className="bg-purple-500 text-white px-4 py-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 border ${
                currentPage === index + 1 ? "bg-purple-700 text-white" : "bg-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="bg-purple-500 text-white px-4 py-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>

        {/* Input for Items Per Page */}
        <input
          type="number"
          value={itemsPerPage}
          min="1"
          max={employees.length}
          onChange={(event) => {
            let value = parseInt(event.target.value);
            if (value < 1) value = 1;
            if (value > employees.length) value = employees.length;
            setItemsPerPage(value);
          }}
          className="border px-2 py-1 w-20"
        />
      </div>
    </div>
  );
};

export default Pagination;
