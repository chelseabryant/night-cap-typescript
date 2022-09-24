import { useState } from "react"
import { authenticate, createAccount } from "./utils/authenticate"
import "./Login.css"

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
        <div className="login">
            {authenticated ? (
                "Thank you for logging in!"
            ) : (
                <form onSubmit={login}>
                    <h2>{isCreating ? "Create an account" : "Sign in"}</h2>
                    <p>{errorMessage ? "Input invalid" : ""}</p>
                    <input className="login" placeholder="Enter email" onChange={emailInput} />
                    <input
                        className="login"
                        type="password"
                        placeholder="Enter password"
                        onChange={passwordInput}
                    />
                    <button className="button">{isCreating ? "Create account" : "Sign in"}</button>
                    <button
                        className="button"
                        type="button"
                        onClick={() => setIsCreating(!isCreating)}
                    >
                        {isCreating ? "Already have an account?" : "Need to create an account?"}
                    </button>
                </form>
            )}
        </div>
    )
}
