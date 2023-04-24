import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {

    const { addItem, isInCart, getProductQuantity } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        if (!isInCart(id)) {
            setNotification('success', `Agregaste ${quantity} ${name} al carrito`)
        } else {
            setNotification('update', `Modificaste la cantidad de ${name} a ${quantity}`)
        }
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <div className="CardItem container text-center">
            <div className="row row-cols-2">
                <div className='col align-self-start'>
                    <header className="Header">
                        <h1 className="ItemHeader">
                            {name}
                        </h1>
                    </header>
                    <picture>
                        <img src={img} alt={name} className="ItemImg" />
                    </picture>
                </div>
                <div className="col align-self-center">
                    <p className="Info">
                        <strong>Categoría:</strong> {category}
                    </p>
                    <p className="Info">
                        <strong>Descripción:</strong> {description}
                    </p>
                    <p className="Info">
                        <strong>Precio:</strong> $ {price}
                    </p>
                    <div>
                        { stock !== 0 
                            ? <ItemCount id='ending' onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> 
                            : <h4>Producto Sin Stock</h4> }
                        { isInCart(id) && <Link to='/cart' id='ending' className="btn btn-outline-secondary btn-sm">Finalizar Compra</Link> }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail