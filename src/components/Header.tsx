import { Link } from "react-router-dom"
import Login from "./Login"
import Modal from "./modal/Modal"
import { useState } from "react"
import "./Header.css"

export default function Header() {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    const logout = () => {
        localStorage.removeItem("user")
        setAuthenticated(false)
    }

    return (
        <div className="header">
            <div className="header-left">
                <Link className="title" to="/">
                    Night Cap
                </Link>
            </div>
            <div className="header-right">
                {authenticated ? (
                    <Link className="homebar" to="/homebar">
                        My Home Bar
                    </Link>
                ) : (
                    <p className="disabled-homebar">Sign in to use Homebar</p>
                )}
                {authenticated ? (
                    <button onClick={logout}>Log out</button>
                ) : (
                    <button onClick={() => setIsOpened(true)}>Sign In/Sign Up</button>
                )}
                <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                    <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
                </Modal>
            </div>
        </div>
    )
}
