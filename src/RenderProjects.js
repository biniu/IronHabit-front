import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

class ProjectEntrance extends React.Component {
  render() {
    return (
      <tr>
        <td width="70%">{this.props.name}</td>
        <td width="15%">10%</td>
        <td width="15%">1/10</td>
      </tr>
    );
  }
}

class GetProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      projectList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/project")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projectList: result
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
    const { error, isLoaded, projectList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (projectList === undefined) {
      return <div>project is undefined</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        projectList.map((project) =>
          <ProjectEntrance name={project.name} />
        )
      );
    }
  }
}

export function RenderProjects() {
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
        <Table className="ProjectTable">
          <tbody>
            <GetProjectList />
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>);
}
