import React from 'react';

function Filter({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Filtra per genere"
      value={filter}
      onChange={handleFilterChange}
      className="FilterInput"
    />
  );
}

export default Filter;
