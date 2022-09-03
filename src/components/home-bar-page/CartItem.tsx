import { useState } from "react"
import "./BarCart.css"

type Props = {
    item: string
    setCartItems: React.Dispatch<React.SetStateAction<string[]>>
    cartItems: string[]
}

export default function CartItem({ item, setCartItems, cartItems }: Props) {
    const [editing, setEditing] = useState<boolean>(false)
    const [editInput, setEditInput] = useState<string>(item)

    const onDeleteClick = (): void => {
        let filteredCart = cartItems.filter(i => i !== item)
        setCartItems(filteredCart)
    }

    const onEditClick = (): void => {
        setEditing(!editing)

        const updatedCartItems = cartItems.map(currentItem => {
            return currentItem === item ? editInput : currentItem
        })
        setCartItems(updatedCartItems)
    }

    const editingItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditInput(e.target.value)
    }

    return (
        <div>
            <li>
                <input
                    value={editInput}
                    className={editing ? "" : "unstyled-input"}
                    disabled={!editing}
                    onChange={editingItem}
                />
                <button onClick={onEditClick}>{editing ? "Save" : "Edit"}</button>
                <button onClick={onDeleteClick}>Delete</button>
            </li>
        </div>
    )
}
