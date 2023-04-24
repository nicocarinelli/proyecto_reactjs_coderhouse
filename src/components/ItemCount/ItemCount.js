import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div id='counter'>
            <div>
                <h4>Stock: {stock}</h4>
            </div>
            <br />
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <br />
            <div className='Controls'>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount