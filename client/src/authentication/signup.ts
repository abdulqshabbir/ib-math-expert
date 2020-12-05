import { auth } from '../firebase'

export const signupUser =
    async (
        email: string,
        password: string,
        setError: React.Dispatch<React.SetStateAction<string>>,
        authenticateUser: (email: string, id: string) => void
    ) => {
        try {
            // create user and store in context
            const firebaseUserObject = await auth.createUserWithEmailAndPassword(email, password)

            if (firebaseUserObject.user && firebaseUserObject.user.email) {
                const email: string = firebaseUserObject.user.email
                const uid: string = firebaseUserObject.user.uid
                authenticateUser(email, uid)
            } else {
                setError('No user found in database.')
            }
        } catch (e) {
            // throw error back to client
            setError(e.message)
        }
    }