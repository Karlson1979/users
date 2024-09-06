import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export const ContactForm = ({ addContact }) => {
  // Схема валидации с использованием Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name should be at least 2 characters')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number should contain only digits')
      .min(10, 'Phone number should be at least 10 digits')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const INITIAL_VALUES = {
    name: '',
    number: '',
    email: '',
  };

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
      email: values.email,
    };
    addContact(contactObject);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(values,errors)=>{
        console.log(errors)
        return(
          <Form>
        <label>
          <span>Name:</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label>
          <span>Number:</span>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" className="error" />
        </label>
        <label>
          <span>Email:</span>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
        )
      }}
      
    </Formik>
  );
};
