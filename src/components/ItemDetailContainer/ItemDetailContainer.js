import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../services/firebase/firestore/product";
import { useAsync } from "../../hooks/useAsync";
import { useNotification } from "../../notification/NotificationService";

const ItemDetailContainer = () => {
    const { setNotification } = useNotification()

    const { productId } = useParams()

    const getSelectedProduct = () => getProduct(productId)

    const { data: product, error, loading } = useAsync(getSelectedProduct, [productId])

    if(loading) {
        return (
            <div>
                <Spinner />
            </div>
        )
    } else {
        document.title = `Detalle de ${product.name}`
    }

    if (error) {
        return setNotification('error', 'Hubo un error, por favor refrescá la página')
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer