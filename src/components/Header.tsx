import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Link to="/">Night Cap</Link>
            <Link to="/homebar">My Home Bar</Link>
        </div>
    )
}
