import { auth } from '../firebase'

export const signupUser =
    async (
        email: string,
        password: string,
        setError: React.Dispatch<React.SetStateAction<string>>,
        setUser: React.Dispatch<React.SetStateAction<{}>>,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        // clear any previous errors
        setError('')
        try {
            // isLoading controls the disabling of the signup button
            setIsLoading(true)

            // create user and store in context
            const userObject = await auth.createUserWithEmailAndPassword(email, password)
            if (userObject.user) {
                console.log(userObject.user.uid)
                console.log(userObject.user.email)
            }
        } catch (e) {
            // throw error back to client
            setError(e.message)
        }
    }