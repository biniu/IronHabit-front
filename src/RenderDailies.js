import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

class DailyEntrance extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.props.name)
  }

  render() {
    return (
      <div>
        <label>
          <input className="taskCheckbox" type="checkbox"
            onChange={this.handleChange} />
          {this.props.name}
        </label>
      </div>
    );
  }
}

class GetDailiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dailies: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/dailies")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result")
          console.log(result)
          this.setState({
            isLoaded: true,
            dailies: result
          });
        },
        (error) => {
          console.log("error")
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, dailies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (dailies === undefined) {
      return <div>daily is undefined</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        dailies.map((daily) =>
          <DailyEntrance name={daily.name} />
        )
      );
    }
  }
}

export function RenderDailies() {
  return (
    <Container fluid>
      Dailies
            <Row>Add a Daily</Row>
      <Row>
        <Col className="Tasks">
          <div className="rowTasks">
            <GetDailiesList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
