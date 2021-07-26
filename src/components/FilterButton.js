import React from 'react';
import Button from 'react-bootstrap/Button';

const FilterButton = (props) => {
  const { onClick, filter } = props;
  return <Button onClick={onClick}>{filter}</Button>;
};

export default FilterButton;
