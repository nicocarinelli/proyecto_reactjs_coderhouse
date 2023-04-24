import './Cart.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, total, deleteCart, totalQuantity } = useCart()

    document.title = 'Carrito de Compras'

    if (totalQuantity === 0) {
        return (
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link  to='/' className='btn btn-outline-secondary btn-sm'>Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div>
            {
                cart.map((prod) => (
                    <CartItem key={prod.id} {...prod}/>
                ))
            }

            <div className='info'>
                Precio Total: $ {total}
            </div>

            <button onClick={() => deleteCart()}>Vaciar el carrito</button>
            <Link to='/checkout' id='check' className='btn btn-outline-secondary btn-sm'>Checkout</Link>
        </div>       
    )   
}

export default Cart