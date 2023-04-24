import Cart from './assets/cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div className='CartWidget'>
            <Link to={'/cart'} className="link-secondary">
                Carrito
                <img src={Cart} className='carritoLogo' alt='carrito' />
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget