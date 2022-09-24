import { useState, useEffect } from "react"
import { ICocktail } from "../../interfaces"
import Modal from "../modal/Modal"
import "./CocktailInfo.css"

type Props = {
    cocktail: ICocktail
}

interface IIngredient {
    ingredient: string
}

interface IMeasure {
    measure: string
}

export default function CocktailInfo({ cocktail }: Props) {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [ingredients, setIngredients] = useState<IIngredient[]>([])
    const [measures, setMeasures] = useState<IMeasure[]>([])

    const formatData = () => {
        const allIngredients: IIngredient[] = []
        const allMeasures: IMeasure[] = []
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

    useEffect(() => {
        formatData()
    }, [])

    return (
        <div>
            <img
                src={cocktail.strDrinkThumb}
                alt=""
                className="cocktail-photo"
                onClick={() => setIsOpened(true)}
            />
            <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
            <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt="" className="cocktail-photo" />
                <h4 className="ingredient-title">Ingredients</h4>
                <div className="ingredients-measurements">
                    <ul>
                        {ingredients.map((item, i) => (
                            <li className="ingredients" key={`${item.ingredient}${i}`}>
                                {item.ingredient}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {measures.map((item, i) => (
                            <div className="measurements" key={`${item.measure}${i}`}>
                                {item.measure}
                            </div>
                        ))}
                    </ul>
                </div>
                <p className="glass">Glass: {cocktail.strGlass}</p>
                <p>{cocktail.strInstructions}</p>
            </Modal>
        </div>
    )
}
