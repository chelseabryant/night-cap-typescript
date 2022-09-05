import { useState } from "react"
import { Link } from "react-router-dom"
import { cocktailCategories } from "../../Data"

export default function Homepage() {
    const [searchBar, setSearchBar] = useState<string>("")

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchBar(e.target.value)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <input
                type="text"
                value={searchBar}
                placeholder="Search for a cocktail!"
                onChange={updateInput}
            />
            {/* <Link to={`/cocktails/${searchBar}?name=true`}> */}
                <button>Search</button>
            </Link>
            <ul>
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
