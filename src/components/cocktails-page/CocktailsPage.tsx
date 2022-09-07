import { cocktailCategories } from "../../Data"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient"
import { ICocktail } from "../../interfaces"
import "./CocktailsPage.css"
import { getCocktailsByName } from "../../ajax/getCocktailsByName"

export default function CocktailsPage() {
    const routeParams = useParams<string>()
    const [cocktails, setCocktails] = useState<ICocktail[]>([])
    const [queryParams] = useSearchParams()

    const fetchData = async () => {
        if (routeParams.category) {
            if (queryParams.get("name") === "true") {
                const data = await getCocktailsByName(routeParams.category)
                setCocktails(data.drinks)
            } else {
                const data = await getCocktailsByIngredient(routeParams.category)
                setCocktails(data.drinks)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [routeParams])

    return (
        <div>
            {routeParams.category && (
                <h1>{routeParams.category[0].toUpperCase() + routeParams.category.slice(1)}</h1>
            )}
            <ul>
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>

            {cocktails.map(cocktail => (
                <div>
                    <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
                    <img src={cocktail.strDrinkThumb} alt="" className="cocktail-photo" />
                </div>
            ))}
        </div>
    )
}
