import { useState } from "react"
import CartItem from "./CartItem"

export default function BarCart() {
    const [barCartItem, setBarCartItem] = useState<string>("")
    const [cartItems, setCartItems] = useState<Array<string>>([])

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
    console.log(cartItems)

    return (
        <div>
            <h4>Bar Cart</h4>
            <input
                type="text"
                value={barCartItem}
                placeholder="Enter home ingredient"
                onChange={updateBarCartItem}
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
