import { useState } from "react"
import { Link } from "react-router-dom"
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient"
import { getCocktailsByName } from "../../ajax/getCocktailsByName"
import { ICocktail, IPartialCocktail } from "../../interfaces"
import CocktailInfo from "../cocktails-page/CocktailInfo"
import { cocktailCategories } from "../Data"
import BarCart from "./BarCart"
import CocktailBuilder from "./CocktailBuilder"
import "./HomeBarPage.css"

interface ICocktailHash {
    [cocktailId: string]: number
}

export default function HomeBarPage() {
    const [cocktails, setCocktails] = useState<ICocktail[]>([])

    const searchByIngredients = async (ingredientList: string[]) => {
        /* Need to map through the ingredient list to isolate each ingredient and get back cocktails
        with said ingredient. Each ingredient willl return an array of cocktails, then check for matching
        id's within each array.*/
        const cocktailLists: Array<IPartialCocktail[]> = await Promise.all(
            ingredientList.map(async ingredient => {
                const response = await getCocktailsByIngredient(ingredient)
                return response.drinks
            })
        )
        const hashMap: ICocktailHash = {}
        cocktailLists[0].forEach(cocktail => {
            hashMap[cocktail.strDrink] = 1
        })
        cocktailLists.slice(1).forEach(cocktailList => {
            cocktailList.forEach(cocktail => {
                if (hashMap[cocktail.strDrink]) {
                    hashMap[cocktail.strDrink] += 1
                }
            })
        })
        const overlappingDrinks = Object.keys(hashMap).filter(name => hashMap[name] > 1)
        const cocktailList = await Promise.all(
            overlappingDrinks.map(async drink => {
                const response = await getCocktailsByName(drink)
                return response.drinks[0]
            })
        )
        setCocktails(cocktailList)
    }

    return (
        <div className="container">
            <h1>Home Bar</h1>
            <ul className="menu-bar">
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="page-grid">
                <BarCart />
                <CocktailBuilder searchByIngredients={searchByIngredients} />
                {cocktails.map(cocktail => (
                    <CocktailInfo key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>
        </div>
    )
}
