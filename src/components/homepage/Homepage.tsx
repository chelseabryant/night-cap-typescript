import { useState } from "react"
import { Link } from "react-router-dom"
import { cocktailCategories } from "../Data"
import "./Homepage.css"
import { FaSearch } from "react-icons/fa"

export default function Homepage() {
    const [searchBar, setSearchBar] = useState<string>("")

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchBar(e.target.value)
    }

    return (
        <div className="container">
            <div className="button-inside-input">
                <input
                    className="search-bar"
                    type="text"
                    value={searchBar}
                    placeholder="Search for a cocktail!"
                    onChange={updateInput}
                />
                <Link to={`/cocktails/${searchBar}?name=true`}>
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </Link>
            </div>
            <ul className="main-menu">
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>
                            <img src={item.photo} alt="" className="cocktail-image" />
                            <p className="item-title">{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
