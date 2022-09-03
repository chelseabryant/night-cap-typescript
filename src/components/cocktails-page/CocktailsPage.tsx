import { cocktailCategories } from "../../Data"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient"
import { ICocktail } from "../../interfaces"

export default function CocktailsPage() {
    const routeParams = useParams<string>()
    const [cocktails, setCocktails] = useState<ICocktail[]>([])

    const fetchData = async () => {
        if (routeParams.category) {
            const data = await getCocktailsByIngredient(routeParams.category)
            console.log(data)
            setCocktails(data.drinks)
        }
    }

    useEffect(() => {
        fetchData()
    }, [routeParams])

    return (
        <div>
            {routeParams.category && (
                <h2>{routeParams.category[0].toUpperCase() + routeParams.category.slice(1)}</h2>
            )}
            <ul>
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>

            {cocktails.map(cocktail => (
                <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
            ))}
        </div>
    )
}
