import React, { useState} from 'react'
import { Form, Button, Message, Header } from 'semantic-ui-react'
import { signupUser } from '../authentication/signup'
import './Signup.css'
import { useAuthUpdate } from '../contexts/AuthProvider'
import { Link } from 'react-router-dom'

export const Signup = () => {
    // state variables for form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [error, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const authenticateUser = useAuthUpdate()

    // form submission handler
    async function handleSubmit(email: string, password: string, passwordConfirm: string) {
        setMessage('')
        setIsLoading(true)
        if (password !== passwordConfirm) {
            setMessage('Passwords do not match.')
            setIsLoading(false)
            return
        }
        await signupUser(email, password, setMessage, authenticateUser)
        clearFormFields()
        setIsLoading(false)
    }

    function clearFormFields() {
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }

    let SignupMessage = null

    if (error !== '') {
        SignupMessage =
            <Message size="tiny">
                <Message.Content>
                    {error}
                </Message.Content>
            </Message>
    }

    return(
        <Form className="signup-form-container">
            <Header as='h1'>Signup Here.</Header>
            <Form.Field className="signup-form-field">
                <label>Email: </label>
                <input 
                    type="text"
                    placeholder="email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Field>
            <Form.Field className="signup-form-field">
                <label>Password: </label>
                <input
                    type="password"
                    placeholder="password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Field>
            <Form.Field className="signup-form-field">
                <label>Confirm Password: </label>
                <input
                    type="password"
                    placeholder="confirm password..."
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
            </Form.Field>
            <Button 
                type="submit"
                color="blue"
                className="signup-form-button"
                disabled={isLoading}
                onClick={(e) => handleSubmit(email, password, passwordConfirm)}
            >
                Sign Up
            </Button>
            <p>Already a User? <Link to='/login'>Login here.</Link></p>
            {SignupMessage}
        </Form>
    )
}