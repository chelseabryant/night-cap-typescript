import { useState } from "react"
import Ingredient from "./Ingredient"

type Props = {
    searchByIngredients: (ingredientList: string[]) => void
}

export default function CocktailBuilder({ searchByIngredients }: Props) {
    const [ingredient, setIngredient] = useState<string>("")
    const [ingredientList, setIngredientList] = useState<string[]>([])

    const updateIngredients = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIngredient(e.target.value)
    }

    const onAddClick = (): void => {
        updateIngredientList(ingredient)
        setIngredient("")
    }

    const updateIngredientList = (item: string): void => {
        if (item && !ingredientList.includes(item)) setIngredientList([...ingredientList, item])
    }

    const search = () => {
        searchByIngredients(ingredientList)
    }

    return (
        <div>
            <h4>Search for cocktails by ingredients</h4>
            <input
                type="text"
                value={ingredient}
                placeholder="Add ingredient"
                onChange={updateIngredients}
                onKeyDown={e => e.key === "Enter" && onAddClick()}
            />
            <button onClick={onAddClick}>Add</button>
            <button onClick={search}>Shake it up!</button>
            {ingredientList.map(item => (
                <Ingredient
                    key={item}
                    item={item}
                    ingredientList={ingredientList}
                    setIngredientList={setIngredientList}
                />
            ))}
        </div>
    )
}
