import React, { useState} from 'react'
import { auth } from '../firebase'

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

    // form submission handler
    async function handleSubmit(email: string, password: string) {
        setError('')
        setIsLoading(true)
        try {
            const firebaseUser = await auth.signInWithEmailAndPassword(email, password)
            setIsLoading(false)

            if(userHasRequiredFields(firebaseUser)) {
                history.push('/dashboard') 
            } else {
                setError('Could not log in user.')
            }
        } catch(e) {
            setIsLoading(false)
            setError(e.message)
        }
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
                <p>{ErrorMessage}</p>
                <p>New User? <Link to='/signup'>Signup Here.</Link></p>
            </Form>
        </>
    )
}

function userHasRequiredFields(firebaseUser: any) {
    return firebaseUser.user && firebaseUser.email && firebaseUser.uid
}