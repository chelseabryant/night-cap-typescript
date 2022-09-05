import { useState } from "react"
import CartItem from "./CartItem"
import "./BarCart.css"

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
            <input
                type="text"
                value={barCartItem}
                placeholder="Enter home ingredient"
                onChange={updateBarCartItem}
                // onKeyDown is similar to a ternary with no 'else' statememt. If e.key equals 'Enter' then run onAddClick func.
                onKeyDown={e => e.key === "Enter" && onAddClick()}
            />
            <button onClick={onAddClick}>Add</button>
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
