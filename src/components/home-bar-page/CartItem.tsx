export default function CartItem({ item }) {
    return (
        <div>
            <li>
                <input value={item} />
            </li>
        </div>
    )
}
