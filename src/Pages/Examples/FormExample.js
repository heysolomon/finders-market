import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'

export default function FormExample() {
    
  return (
    <Formik
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }}
    >
        {formik => (
            <div>
                {console.log(formik.values)}
                <h1 className="text-5xl">Form</h1>
                <Form>
                    <TextField label="First Name" name="firstName" type="text" />
                    <TextField label="Last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                </Form>
            </div>
        )}
    </Formik>
  )
}
