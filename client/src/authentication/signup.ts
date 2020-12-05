import { auth } from '../firebase'

export const signupUser =
    async (
        email: string,
        password: string,
        setError: React.Dispatch<React.SetStateAction<string>>,
        setUser: (email: string, id: string) => void,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        try {
            // isLoading controls the disabling of the signup button
            setIsLoading(true)

            // create user and store in context
            const firebaseUserObject = await auth.createUserWithEmailAndPassword(email, password)

            // re-enable the signup button
            setIsLoading(false)

            if (firebaseUserObject.user && firebaseUserObject.user.email) {
                const email: string = firebaseUserObject.user.email
                const password: string = firebaseUserObject.user.uid
                setUser(email, password)
            } else {
                setError('No user found in database.')
            }
        } catch (e) {
            // throw error back to client
            setError(e.message)
        }
    }