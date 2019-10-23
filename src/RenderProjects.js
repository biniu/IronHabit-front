import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

class ProjectEntrance extends React.Component {


  render() {
    return (
      <tr>
        <td width="70%">Project {this.props.name}</td>
        <td width="15%">10%</td>
        <td width="15%">1/10</td>
      </tr>
    );
  }
}

export function RenderProjects() {

  const ProjectList = [
    <ProjectEntrance name="1" />,
    <ProjectEntrance name="2" />,
    <ProjectEntrance name="3" />,
    <ProjectEntrance name="4" />,
    <ProjectEntrance name="5" />,
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
        <Table className="ProjectTable">
          <tbody>
            {ProjectList}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>);
}
