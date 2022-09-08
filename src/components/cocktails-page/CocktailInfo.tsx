import { useState } from "react"
import { ICocktail, IFullCocktail } from "../../interfaces"
import Modal from "../modal/Modal"

type Props = {
    cocktail: IFullCocktail | ICocktail
}

export default function CocktailInfo({ cocktail }: Props) {
    const [isOpened, setIsOpened] = useState<boolean>(false)

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
                <h5>Ingredients</h5>
                <ul>
                    <li></li>
                </ul>
                <p>Glass: {cocktail.strGlass}</p>
            </Modal>
        </div>
    )
}
