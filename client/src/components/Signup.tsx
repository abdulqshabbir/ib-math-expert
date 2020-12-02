import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import { signupUser } from '../authentication/signup'
import './Signup.css'

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(email: string, password: string, passwordConfirm: string) {
        // internal check to make sure passwords match
        if (password !== passwordConfirm) {
            setError('Passwords do not match.')
            return
        }
        // have google sign up user
        signupUser(email, password, setError, setUser, setIsLoading)
    }
    return(
        <Form className="signup-form-container">
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
                onClick={(e) => handleSubmit(email, password, passwordConfirm)}
            >
                Sign Up
            </Button>
            {error ? <p>{error}</p> : null}
        </Form>
    )
}