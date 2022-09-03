import { useState } from "react"
import Ingredient from "./Ingredient"

export default function CocktailBuilder() {
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
