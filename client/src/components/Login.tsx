import React, { useState} from 'react'
import { Form, Button, Message, Header } from 'semantic-ui-react'
import './Login.css'

export const Login = () => {
    // state variables for form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // form submission handler
    async function handleSubmit(email: string, password: string) {
    }

    let ErrorMessage = null

    if (error !== '') {
        ErrorMessage =
            <Message negative size="tiny">
                <Message.Content>
                    {error}
                </Message.Content>
            </Message>
    }

    return(
        <Form className="login-form-container">
            <Header as='h1'>Login Here.</Header>
            <Form.Field className="login-form-field">
                <label>Email: </label>
                <input 
                    type="text"
                    placeholder="email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Field>
            <Form.Field className="login-form-field">
                <label>Password: </label>
                <input
                    type="password"
                    placeholder="password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Field>
            <Button 
                type="submit"
                color="blue"
                className="login-form-button"
                disabled={isLoading}
                onClick={(e) => handleSubmit(email, password)}
            >
                Login
            </Button>
            {ErrorMessage}
        </Form>
    )
}