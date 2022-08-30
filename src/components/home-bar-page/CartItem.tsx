import { useState } from "react"

type Props = {
    item: string
    setCartItems: React.Dispatch<React.SetStateAction<string[]>>
    cartItems: string[]
}

export default function CartItem({ item, setCartItems, cartItems }: Props) {
    const [editing, setEditing] = useState<boolean>(false)
    const [editInput, setEditInput] = useState<string>("")

    const onDeleteClick = (): void => {
        let filteredCart = cartItems.filter(i => i !== item)
        setCartItems(filteredCart)
    }

    const onEditClick = (): void => {
        setEditing(!editing)

        // const updatedCartItems = cartItems.map(currentItem => {
        //     if (currentItem === item) {
        //         return editInput
        //     } else {
        //         return currentItem
        //     }
        // })
        // setEditInput(updatedCartItems)
    }

    const editingInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditInput(e.target.value)
    }
    console.log(editInput)

    return (
        <div>
            <li>
                <input
                    value={item}
                    className={editing ? "" : "unstyled-input"}
                    disabled={!editing}
                    onChange={editingInput}
                />
                <button onClick={onEditClick}>{editing ? "Save" : "Edit"}</button>
                <button onClick={onDeleteClick}>Delete</button>
            </li>
        </div>
    )
}
