import React from 'react';

import {
  Dropdown,
  FormControl,
} from 'react-bootstrap';

class TagToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

class TagMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className,
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  }
}

function GetTagList() {

  const TagList = [
    "Red",
    "Blue",
    "Orange",
    "Red-Orange",
  ]

  return TagList.map((tag) =>
    <Dropdown.Item>{tag}</Dropdown.Item>
  );

}

export function GetTagMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={TagToggle} id="dropdown-custom-components">
        Tags
    </Dropdown.Toggle>

      <Dropdown.Menu as={TagMenu}>
        <GetTagList />
      </Dropdown.Menu>
    </Dropdown>
  );
}