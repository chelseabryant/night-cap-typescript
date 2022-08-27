import { useState } from "react"

export default function CocktailBuilder() {
    const [ingredients, setIngredients] = useState<string>("")

    const updateIngredients = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIngredients(e.target.value)
    }

    const onAddClick = () => {}

    return (
        <div>
            <h4>Search for cocktails by ingredients</h4>
            <input type="text" placeholder="Add ingredient" onChange={updateIngredients} />
            <button onClick={onAddClick}>Add</button>
        </div>
    )
}
