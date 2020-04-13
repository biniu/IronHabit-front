import React from 'react';
import {
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

function GetFilterList() {

  const FilterList = [
    "Filter 1",
    "Filter 2",
    "Filter 3",
  ]

  return FilterList.map((filter) =>
    <Dropdown.Item>{filter}</Dropdown.Item>
  );

}

export function GetFilterDropdown() {

  return (
    <DropdownButton id="dropdown-basic-button" title="Filter by">
      <GetFilterList />
    </DropdownButton>
  );
}
