import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.h2`
  color: #ff7f50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

const Input = styled(Field)`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.text}40;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: #ff7f50;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 150px;
`;

const ErrorText = styled.div`
  color: #ff4d4f;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #ff7f50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  align-self: flex-start;

  &:hover {
    background-color: #e66c3a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Your name is required'),
    email: Yup.string().email('Invalid email address').required('Your email is required'),
    message: Yup.string().required('Please enter a message'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Thank you for your message!');
    resetForm();
  };

  return (
    <ContactSection>
      <Heading>Get in Touch</Heading>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <StyledForm>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" />
            <ErrorMessage name="name" component={ErrorText} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
            <ErrorMessage name="email" component={ErrorText} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" />
            <ErrorMessage name="message" component={ErrorText} />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
      </Formik>
    </ContactSection>
  );
};

export default Contact;
