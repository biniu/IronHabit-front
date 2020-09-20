import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Popup from 'reactjs-popup';

import './Quest.css';

export const QuestEntrance = (props) => {

  const questContent = <Fragment>
    <Col lg={1} className={'centered'}>
      <h1>
        P{props.quest.priority}
      </h1>
    </Col>

    <Col lg={8}>
      <Row>
        <Col lg={8}>
          <h3 className={"text-left"}>
            {props.quest.name}
          </h3>
        </Col>
        <Col lg={4}>
          <Row>
            <Col lg={6}>
              <h6>
                Deadline
              </h6>
            </Col>
            <Col lg={6}>
            <h6>
              Created
            </h6>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <h6>
              Estimation
              </h6>
            </Col>
            <Col lg={6}>
              <h6>
              Logged
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h6 className="text-left">
            {props.quest.description}
          </h6>
        </Col>
      </Row>
    </Col>

    <Col lg={2}>
      <Row>
        <Col>
          <h6>
          {props.quest.project}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>
          TAGS
          </h6>
        </Col>
      </Row>
    </Col>
  </Fragment>

  return <Container fluid>
    <Row className={'quest-entrance'}>
      <Col lg={1} className={'centered'}>
        <div className={'checkbox'}></div>
      </Col>

      <Popup trigger={questContent} modal closeOnDocumentClick>
        {/*{popUpContent}*/}
      </Popup>

    </Row>
  </Container>
};
