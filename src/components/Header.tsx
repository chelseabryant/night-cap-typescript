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
        <div className="header-wave">
            <header className="header">
                <Link className="title" to="/">
                    Night Cap
                </Link>
                <div className="header-right">
                    {authenticated ? (
                        <Link className="homebar" to="/homebar">
                            My Home Bar
                        </Link>
                    ) : (
                        <button className="disabled-homebar" onClick={() => setIsOpened(true)}>
                            Sign in to use Homebar
                        </button>
                    )}
                    {authenticated ? (
                        <button className="button" onClick={logout}>
                            Log out
                        </button>
                    ) : (
                        <button className="button" onClick={() => setIsOpened(true)}>
                            Sign in
                        </button>
                    )}
                    <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
                    </Modal>
                </div>
                <div className="custom-shape-divider-bottom-1663960192">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </header>
        </div>
    )
}
