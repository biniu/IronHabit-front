import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class HabitEntrance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="button">+</button>
        Habit {this.props.name}
        <button className="button">-</button>
      </div>
    );
  }
}

export function RenderHabits() {

  const HabitList = [
    <HabitEntrance name="1" />,
    <HabitEntrance name="2" />,
    <HabitEntrance name="3" />,
    <HabitEntrance name="4" />,
    <HabitEntrance name="5" />,
  ]

  return (<Container fluid>
    <Row>
      <Col md="6"> Projects </Col>
      <Col md="2">
        <button className="button">Sort</button>
      </Col>
      <Col md="2">
        <button className="button">Filter</button>
      </Col>
      <Col md="2">
        <button className="button">Tags</button>
      </Col>
    </Row>

    <Row>
      <Col>
        <div className="rowHabit">
          {HabitList}
        </div>
      </Col>
    </Row>
  </Container>);
}
