import { Link } from "react-router-dom"
import Login from "./Login"
import Modal from "./modal/Modal"
import { useState, useEffect } from "react"

export default function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    const logout = () => {
        localStorage.removeItem("user")
        setAuthenticated(false)
    }

    return (
        <div>
            <Link to="/">Night Cap</Link>
            <Link to="/homebar">My Home Bar</Link>
            {authenticated ? (
                <button onClick={logout}>Log out</button>
            ) : (
                <button onClick={() => setIsOpened(true)}>Sign In/Sign Up</button>
            )}
            <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Modal>
        </div>
    )
}
