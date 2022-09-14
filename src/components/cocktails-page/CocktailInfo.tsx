import { useState, useEffect } from "react"
import { ICocktail } from "../../interfaces"
import Modal from "../modal/Modal"

type Props = {
    cocktail: ICocktail
}

export default function CocktailInfo({ cocktail }: Props) {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [ingredients, setIngredients] = useState<any[]>([])
    const [measures, setMeasures] = useState<any[]>([])

    const formatData = () => {
        const allIngredients = []
        const allMeasures = []
        for (let i: number = 1; i < 16; i++) {
            // @ts-ignore
            if (cocktail[`strIngredient${i}`]) {
                const ingredientList = {
                    // @ts-ignore
                    ingredient: cocktail[`strIngredient${i}`],
                }
                allIngredients.push(ingredientList)
            }
            // @ts-ignore
            if (cocktail[`strMeasure${i}`]) {
                const measureList = {
                    // @ts-ignore
                    measure: cocktail[`strMeasure${i}`],
                }
                allMeasures.push(measureList)
            }
        }
        setIngredients(allIngredients)
        setMeasures(allMeasures)
    }
    console.log(ingredients)

    useEffect(() => {
        formatData()
    }, [])

    return (
        <div>
            <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
            <img
                src={cocktail.strDrinkThumb}
                alt=""
                className="cocktail-photo"
                onClick={() => setIsOpened(true)}
            />
            <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt="" className="cocktail-photo" />
                <ul>
                    <h4>Ingredients</h4>
                    {ingredients.map(item => (
                        <li>{item.ingredient}</li>
                    ))}
                </ul>
                {measures.map(item => (
                    <div>{item.measure}</div>
                ))}
                <p>Glass: {cocktail.strGlass}</p>
                <p>{cocktail.strInstructions}</p>
            </Modal>
        </div>
    )
}
