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
                    Dailies {this.props.name}
                </label>
            </div>
        );
    }
}

export function RenderDailies() {

    const DailiesList = [
        <DailyEntrance name="1" />,
        <DailyEntrance name="2" />,
        <DailyEntrance name="3" />,
        <DailyEntrance name="4" />,
        <DailyEntrance name="5" />,
        <DailyEntrance name="6" />,
        <DailyEntrance name="7" />,
        <DailyEntrance name="7" />,
        <DailyEntrance name="7" />,
    ]

    return (
        <Container fluid>
            Dailies
            <Row>Add a Daily</Row>
            <Row>
                <Col className="Tasks">
                    <div className="rowTasks">
                        {DailiesList}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
