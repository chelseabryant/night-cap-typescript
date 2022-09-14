import { Link } from "react-router-dom"
import { cocktailCategories } from "../Data"
import BarCart from "./BarCart"
import CocktailBuilder from "./CocktailBuilder"

export default function HomeBarPage() {
    return (
        <div>
            <h1>Home Bar</h1>
            <ul>
                {cocktailCategories.map(item => (
                    <li key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <BarCart />
            <CocktailBuilder />
        </div>
    )
}
