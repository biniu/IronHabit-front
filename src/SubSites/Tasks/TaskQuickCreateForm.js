
import React, { Component } from 'react';

import {
  Container,
  Row,
  Form,
} from 'react-bootstrap';


const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>

export class TaskQuickCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <Container>
        <Form >
          <Form.Group as={Row}>

            {/* <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}> */}
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" rows="12" required name="email"
              placeholder="Task name"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
            {/* </div> */}
          </Form.Group>

          <Form.Group as={Row} inline>

            <Form.Label >
              <button type="submit" className="btn btn-primary"
                disabled={!this.state.formValid}>
                Create task
              </button>
            </Form.Label>


            <Form.Label >
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label >
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label >
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label >
              <Form.Control type="text"
                placeholder=""
              // value={this.state.email}
              // onChange={this.handleUserInput}
              />
            </Form.Label>

          </Form.Group>

          <Form.Group as={Row} inline>
            <div>
              <FormErrors formErrors={this.state.formErrors} />
            </div>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default TaskQuickCreateForm;
