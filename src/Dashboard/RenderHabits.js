import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class HabitEntrance extends React.Component {

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

class GetHabitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      habitList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/habit")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            habitList: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, habitList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (habitList === undefined) {
      return <div>habit is undefined</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        habitList.map((habit) =>
          <HabitEntrance name={habit.name} />
        )
      );
    }
  }
}

export function RenderHabits() {
  return (<Container fluid>
    <Row>
      <Col md="6"> Habits </Col>
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
          <GetHabitList />
        </div>
      </Col>
    </Row>
  </Container>);
}
