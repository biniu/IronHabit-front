import React from 'react';
import {
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

function GetSortByList() {

  const SortByList = [
    "sort 1",
    "sort 2",
    "sort 3",
  ]

  return SortByList.map((sort) =>
    <Dropdown.Item>{sort}</Dropdown.Item>
  );

}

export function GetSortDropdown() {

  return (
    <DropdownButton id="dropdown-basic-button" title="Sort by">
      <GetSortByList />
    </DropdownButton>
  );
}
