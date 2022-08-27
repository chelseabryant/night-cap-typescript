import { useState } from "react"
import BarCart from "./BarCart"
import CocktailBuilder from "./CocktailBuilder"

export default function HomeBarPage() {
    return (
        <div>
            <h1>Home Bar</h1>
            <BarCart />
            <CocktailBuilder />
        </div>
    )
}
