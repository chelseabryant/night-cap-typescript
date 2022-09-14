import { Link } from "react-router-dom"
import Login from "./Login"
import Modal from "./modal/Modal"
import { useState } from "react"

type Props = {
    loginMessage: boolean
}

export default function Header(loginMessage: Props) {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("user"))
    // const isAuthenticated = localStorage.getItem("user")

    const logout = () => {
        localStorage.removeItem("user")
    }

    return (
        <div>
            <Link to="/">Night Cap</Link>
            <Link to="/homebar">My Home Bar</Link>
            {loginMessage ? (
                <button onClick={logout}>Log out</button>
            ) : (
                <button onClick={() => setIsOpened(true)}>Sign In/Sign Up</button>
            )}
            <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                <Login />
            </Modal>
        </div>
    )
}
