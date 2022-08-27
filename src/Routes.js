import { Routes as AllRoutes, Route } from "react-router-dom"
import CocktailsPage from "./components/cocktails-page/CocktailsPage"
import HomeBarPage from "./components/home-bar-page/HomeBarPage"
import Homepage from "./components/homepage/Homepage"

export default function Routes() {
    return (
        <AllRoutes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cocktails" element={<CocktailsPage />} />
            <Route path="/homebar" element={<HomeBarPage />} />
        </AllRoutes>
    )
}
