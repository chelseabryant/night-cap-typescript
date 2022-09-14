import { useState } from "react"
import { authenticate, createAccount } from "./utils/authenticate"

type Props = {
    authenticated: boolean
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ authenticated, setAuthenticated }: Props): JSX.Element {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isCreating, setIsCreating] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    const emailInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const passwordInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    }

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isCreating) {
            createAccount(email, password)
            setAuthenticated(true)
        } else {
            const isAuthenticated: boolean = authenticate(email, password)
            if (isAuthenticated) {
                setAuthenticated(true)
            } else {
                setErrorMessage(true)
            }
        }
    }

    return (
        <>
            {authenticated ? (
                "Thank you for logging in!"
            ) : (
                <form onSubmit={login}>
                    <h2>{isCreating ? "Create an account" : "Sign in"}</h2>
                    <p>{errorMessage ? "Input invalid" : ""}</p>
                    <input placeholder="Enter email" onChange={emailInput} />
                    <input type="password" placeholder="Enter password" onChange={passwordInput} />
                    <button>{isCreating ? "Create account" : "Sign in"}</button>
                    <button type="button" onClick={() => setIsCreating(!isCreating)}>
                        {isCreating ? "Already have an account?" : "Need to create an account?"}
                    </button>
                </form>
            )}
        </>
    )
}
