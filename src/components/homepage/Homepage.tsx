import { useState } from "react"

export default function Homepage() {
    const [searchBar, setSearchBar] = useState<string>("")

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchBar(e.target.value)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <input type="text" placeholder="Search for a cocktail!" onChange={updateInput} />
            <button>Search</button>
        </div>
    )
}
