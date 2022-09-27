import { cocktailCategories } from "../Data"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient"
import { ICocktail } from "../../interfaces"
import "./CocktailsPage.css"
import { getCocktailsByName } from "../../ajax/getCocktailsByName"
import CocktailInfo from "./CocktailInfo"

export default function CocktailsPage() {
    const routeParams = useParams<string>()
    const [cocktails, setCocktails] = useState<ICocktail[]>([])
    const [queryParams] = useSearchParams()

    const fetchFullData = async (name: string) => {
        const data = await getCocktailsByName(name)
        return data
    }

    const fetchData = async () => {
        if (routeParams.category) {
            if (queryParams.get("name") === "true") {
                const data = await getCocktailsByName(routeParams.category)
                setCocktails(data.drinks)
            } else {
                const data = await getCocktailsByIngredient(routeParams.category)
                const fullData = await Promise.all(
                    data.drinks.map(async (drink: ICocktail) => {
                        const fetchResponse = await fetchFullData(drink.strDrink)
                        return fetchResponse.drinks[0]
                    })
                )
                setCocktails(fullData)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [routeParams])

    return (
        <div className="container">
            {routeParams.category && (
                <h1 className="liquor-name">
                    {routeParams.category[0].toUpperCase() + routeParams.category.slice(1)}
                </h1>
            )}
            <ul className="menu-bar">
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="cocktails">
                {cocktails.map(cocktail => (
                    <CocktailInfo key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>
        </div>
    )
}
