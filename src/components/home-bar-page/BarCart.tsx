import { useState } from "react"
import CartItem from "./CartItem"
import "./BarCart.css"
import { RiAddFill } from "react-icons/ri"

export default function BarCart() {
    const [barCartItem, setBarCartItem] = useState<string>("")
    const [cartItems, setCartItems] = useState<string[]>([])

    const updateBarCartItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBarCartItem(e.target.value)
    }

    const onAddClick = (): void => {
        updateCartItems(barCartItem)
        setBarCartItem("")
    }

    const updateCartItems = (item: string): void => {
        if (item && !cartItems.includes(item)) setCartItems([...cartItems, item])
    }

    return (
        <div>
            <h4>Bar Cart</h4>
            <div className="ingredint-bar-align">
                <div className="plus-inside-input">
                    <input
                        className="search-bar"
                        type="text"
                        value={barCartItem}
                        placeholder="Enter home ingredient"
                        onChange={updateBarCartItem}
                        // onKeyDown is similar to a ternary with no 'else' statememt. If e.key equals 'Enter' then run onAddClick func.
                        onKeyDown={e => e.key === "Enter" && onAddClick()}
                    />
                    <button className="search-button" onClick={onAddClick}>
                        <RiAddFill />
                    </button>
                </div>
            </div>
            {cartItems.map(item => (
                <CartItem
                    key={item}
                    item={item}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                />
            ))}
        </div>
    )
}
