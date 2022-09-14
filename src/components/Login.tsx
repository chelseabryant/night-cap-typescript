import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"
import { authenticate, createAccount } from "./utils/authenticate"

type Props = {
    authenticated: boolean
}

export default function Login({ authenticated }: Props) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isCreating, setIsCreating] = useState<boolean>(true)
    const [loginMessage, setLoginMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState(false)

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
            setLoginMessage(true)
        } else {
            const isAuthenticated: boolean = authenticate(email, password)
            if (isAuthenticated) {
                setLoginMessage(!loginMessage)
            } else {
                setErrorMessage(!errorMessage)
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
