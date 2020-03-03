import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Moment from 'moment';
import Popup from 'reactjs-popup';

class PopUp extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };


  render() {
    const modal = {
      color: 'red',
      // position: "fixed",
      // zIndex: 1,
      width: '100%',
      height: '100%',
      // minWidth: "200px",
      // minHeight: "100px",
      // backgroundColor: "grean",
      background: 'green',
      // height: "250px",
      // width: "250px",
      position: 'absolute',
      left: 'calc(-50vw + 50%)',
      // left:"0",
      right: '0',
    };

    const content = {
      // position: "absolute",
      // right: "0",
      // left: "0",
      // backgroundColor: "white",
      // position: "absolute",
      // top: "5%",
      // left: "5%",
      // width: "10%",
      // padding: "20px",
      // borderRadius: "5px",
      // border: "2px solid black",
    };
    const close = {
      // color: "Red",
      // float: "right",
    };
    console.log('PopUp');
    return (
      // <div className="modal">
      <div style={modal}>
        <div style={this.content}>
          <span style={this.close} onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Register!</h3>
            <label>
              Name:
              <input type="text" name="name"/>
            </label>
            <br/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export class TaskEntrance extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: "",
    //   description: "",
    //   priority: "",
    //   difficulty: "",
    //   deadline: "",
    //   created: "",
    //   estimation: "",
    //   project: ""
    // }

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      seen: false,
    };
  }

  togglePop = () => {
    console.log('togglePop');
    this.setState({
      // seen: true,
      seen: !this.state.seen,
    });
  };

  handleChange(event) {
  }

  RenderPopUp = () => {
    return (
      <Container>
        <h1>Edit a qest</h1>
        {/* <h4>Title</h4> */}
        <h4>{this.props.name}</h4>
      </Container>
    );
  }

  render() {
    const styleOne = {
      borderBlock: '1px solid red',
    };
    const styleTwo = {
      borderBlock: '1px solid blue',
    };

    const darkBackground = {
      background: 'black',
      margin: '5px',
    };

    return <Container fluid >

      <div className="row" style={darkBackground}>
        <div className="col-md-1">
          <a href="#" className="btn btn-secondary" type="button">Button</a>
        </div>
        <div className="col-md-11">
          <div className="row">
            <div className="col-md-1">
              <span className="badge badge-default">Label</span>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="text-left">
                      h3. Lorem ipsum dolor sit amet. h3. Lorem ipsum dolor sit amet. h3. Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="badge badge-default">Label</span>
                    </div>
                    <div className="col-md-6">
                      <span className="badge badge-default">Label</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="badge badge-default">Label</span>
                    </div>
                    <div className="col-md-6">
                      <span className="badge badge-default">Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3>
                      h3. Lorem ipsum dolor sit amet. h3. Lorem ipsum dolor sit amet. h3. Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col-md-12">
                  <span className="badge badge-default">Label</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <span className="badge badge-default">Label</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Container>;
  }
}

{/* <Row className="TaskRow">*/}
{/*  <Col className="TaskColCheckBox">*/}

{/*    /!* TODO(biniu) icons to find *!/*/}
{/*    /!* TODO(biniu) put it in middle of heigh  *!/*/}
{/*    <label>*/}
{/*      <input className="taskCheckbox" type="checkbox"*/}
{/*             onChange={this.handleChange}/>*/}
{/*    </label>*/}
{/*  </Col>*/}

{/*  <Col className="TaskColPriority">*/}
{/*    /!* TODO(biniu) icons to find *!/*/}
{/*    /!* TODO(biniu) put it in middle of heigh  *!/*/}
{/*    <div className="TaskEntrance">{this.props.priority}</div>*/}
{/*  </Col>*/}
{/*  <Col>*/}
{/*    <Row>*/}
{/*      <Col>{this.props.name}</Col>*/}
{/*      <Col className="TaskColTime">*/}
{/*        {Moment(this.props.deadline).format('DD/MM')}*/}
{/*      </Col>*/}
{/*      <Col className="TaskColTime">*/}
{/*        {Moment(this.props.estimation).format('DD/MM')}*/}
{/*      </Col>*/}
{/*    </Row>*/}
{/*    <Row>*/}
{/*      <Col>*/}
{/*        {this.props.description}*/}
{/*      </Col>*/}
{/*    </Row>*/}
{/*  </Col>*/}

{/*  <Col className="TaskColProject">*/}
{/*    {this.props.project}*/}
{/*  </Col>*/}

{/*  <Popup*/}
{/*    trigger={<button className="button"> Open Modal </button>}*/}
{/*    modal*/}
{/*    closeOnDocumentClick*/}
{/*  >*/}
{/*    <Col>*/}
{/*      <span> Modal content </span>*/}
{/*    </Col>*/}
{/*  </Popup>*/}
{/* </Row>*/}


{/* <Row className="TaskRow">*/}
{/*  <Col xl="1" xs="1" style={styleOne}>*/}
{/*    /!* TODO(biniu) icons to find *!/*/}
{/*    /!* TODO(biniu) put it in middle of heigh  *!/*/}
{/*    <label>*/}
{/*      <input className="taskCheckbox" type="checkbox"*/}
{/*        onChange={this.handleChange}/>*/}
{/*    </label>*/}
{/*  </Col>*/}
{/*  <Popup*/}
{/*    trigger={*/}
{/*      <Col xl="11" xs="11" style={styleTwo}>*/}
{/*        <Col xl="1" xs="1">*/}
{/*          /!*  /!* TODO(biniu) icons to find *!/*!/*/}
{/*          /!*  /!* TODO(biniu) put it in middle of heigh  *!/*!/*/}
{/*          {this.props.priority}*/}
{/*        </Col>*/}

{/*        <Col xl="11" xs="11" style={styleOne}>*/}
{/*        /!*  <Row>*!/*/}
{/*        /!*    <Col>{this.props.name}</Col>*!/*/}
{/*        /!*    <Col>*!/*/}
{/*        /!*      {Moment(this.props.deadline).format('DD/MM')}*!/*/}
{/*        /!*    </Col>*!/*/}
{/*        /!*    <Col>*!/*/}
{/*        /!*      {Moment(this.props.estimation).format('DD/MM')}*!/*/}
{/*        /!*    </Col>*!/*/}
{/*        /!*  </Row>*!/*/}
{/*        /!*  <Row>*!/*/}
{/*        /!*    <Col>*!/*/}
{/*        /!*      {this.props.description}*!/*/}
{/*        /!*    </Col>*!/*/}
{/*        /!*  </Row>*!/*/}
{/*        </Col>*/}

{/*        /!*<Col>*!/*/}
{/*        /!*  {this.props.project}*!/*/}
{/*        /!*</Col>*!/*/}

{/*      </Col>*/}
{/*    }*/}
{/*    modal*/}
{/*    closeOnDocumentClick*/}
{/*  >*/}
{/*    <Col>*/}
{/*      <span> Modal content </span>*/}
{/*    </Col>*/}
{/*  </Popup>*/}
{/* </Row>*/}

