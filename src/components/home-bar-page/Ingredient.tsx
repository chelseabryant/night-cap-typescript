type Props = {
    item: string
    ingredientList: string[]
    setIngredientList: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Ingredient({ item, ingredientList, setIngredientList }: Props) {
    const onDeleteClick = (): void => {
        let filteredIngredients: string[] = ingredientList.filter(i => i !== item)
        setIngredientList(filteredIngredients)
    }

    return (
        <div>
            <li>
                <input value={item} className="unstyled-input" disabled={true} />
                <button className="homebar-buttons" onClick={onDeleteClick}>
                    Delete
                </button>
            </li>
        </div>
    )
}
