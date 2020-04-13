import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export class PickDate extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.props.handleDate(date)
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default PickDate;
