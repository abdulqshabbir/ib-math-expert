import { auth } from '../firebase'

export const signupUser =
    async (
        email: string,
        password: string,
        setMessage: React.Dispatch<React.SetStateAction<string>>,
        authenticateUser: (email: string, id: string) => void
    ) => {
        try {
            // create user and store in context
            const firebaseUserObject = await auth.createUserWithEmailAndPassword(email, password)

            if (firebaseUserObject.user && firebaseUserObject.user.email) {
                const email: string = firebaseUserObject.user.email
                const uid: string = firebaseUserObject.user.uid
                authenticateUser(email, uid)
                setMessage("New account created!  Login with your new account.")
            } else {
                setMessage('No user found in database.')
            }
        } catch (e) {
            // throw error back to client
            setMessage(e.message)
        }
    }