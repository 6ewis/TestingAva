import React, { PropTypes } from 'react';

const renderTableHeader = (category, index) => <th key={index}>{ category }</th>;

const CategoryRow = ({columns}) => {
  return (
    <thead>
      <tr>
        { columns ? columns.map(renderTableHeader) : null} 
      </tr>
    </thead>
  );
};

CategoryRow.propTypes = {
  columns: PropTypes.array.isRequired
};

export default CategoryRow;
