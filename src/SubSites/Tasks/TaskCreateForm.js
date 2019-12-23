
import React, { useState } from 'react';

import {
  Form,
  Button,
  Col,
  InputGroup,
} from 'react-bootstrap';

// addTaskPopUp = () => {
//     console.log("addTaskPopUp");

//     console.log(this.state.projects);

//     const projectList = this.state.projects.map(project => {
//       return <p>{project.name}</p>;
//     })

//     return (
//       <div>
//         <div>
//           <h2>Create task</h2>
//         </div>
//         <div>
//           <p>Title</p>
//           <label>
//             <input type="text" />
//           </label>
//         </div>
//         <div>
//           <p>Description</p>
//           <label>
//             <input type="text" />
//           </label>
//         </div>
//         <div>
//           <p>Priority</p>
//         </div>
//         <div>
//           <p>Difficulty</p>
//         </div>
//         <div>
//           <div>
//             Estimation ???
//           </div>
//           <div>
//             Deadline ???
//           </div>
//         </div>
//         <div>
//           Tags
//         </div>
//         <div>
//           Project
//           {projectList}
//         </div>
//         <div>
//           SubTasks !!!TODO!!!
//         </div>
//       </div >
//     )
//   }

import { Formik } from 'formik';
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export function TaskCreateForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Row>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="lastName">Last Name</Form.Label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form >
  );
};


// render(<FormExample />);
export default TaskCreateForm
