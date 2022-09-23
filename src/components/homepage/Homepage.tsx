import { useState } from "react"
import { Link } from "react-router-dom"
import { cocktailCategories } from "../Data"
import "./Homepage.css"

export default function Homepage() {
    const [searchBar, setSearchBar] = useState<string>("")

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchBar(e.target.value)
    }

    return (
        <div className="container">
            <h1>Home Page</h1>
            <input
                type="text"
                value={searchBar}
                placeholder="Search for a cocktail!"
                onChange={updateInput}
            />
            <Link to={`/cocktails/${searchBar}?name=true`}>
                <button>Search</button>
            </Link>
            <div className="main-menu">
                {cocktailCategories.map(item => (
                    <ul className="link" key={item.title}>
                        <Link to={item.path}>
                            <img src={item.photo} alt="" className="cocktail-image" />
                            <p>{item.title}</p>
                        </Link>
                    </ul>
                ))}
            </div>
        </div>
    )
}
