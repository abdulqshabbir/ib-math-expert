import React, { useState} from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { Form, Button, Message, Header } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    // state variables for form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const history = useHistory()
    const { login } = useAuth()

    // form submission handler
    async function handleSubmit(email: string, password: string) {
        setError('')
        setIsLoading(true)
        try {
            await login(email, password)
            setIsLoading(false)
            history.push('/dashboard')
        } catch(e) {
            setError(e.message)
            setIsLoading(false)
        }
    }

    let ErrorMessage = null

    const styles = {
        "marginTop": "20px",
        "marginBottom": "20px"
    }

    if (error !== '') {
        ErrorMessage =
            <Message negative size="tiny" style={styles}>
                <Message.Content>
                    {error}
                </Message.Content>
            </Message>
    }

    return(
        <>
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
                <div>{ErrorMessage}</div>
                <div>
                    New User? <Link to='/signup'>Signup here.</Link>
                </div>
            </Form>
        </>
    )
}