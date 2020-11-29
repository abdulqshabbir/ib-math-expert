import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import './Signup.css'

export const Signup = () => {
    return(
        <Form className="signup-form-container">
            <Form.Field className="signup-form-field">
                <label>Email: </label>
                <input type="text" placeholder="email..." />
            </Form.Field>
            <Form.Field className="signup-form-field">
                <label>Password: </label>
                <input type="password" placeholder="password..." />
            </Form.Field>
            <Form.Field className="signup-form-field">
                <label>Confirm Password: </label>
                <input type="password" placeholder="confirm password..." />
            </Form.Field>
            <Button type="submit" color="blue" className="signup-form-button">Sign Up</Button>
        </Form>
    )
}