import Spinner from "../Spinner/Spinner";
import Form from "../Form/Form";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNotification } from '../../notification/NotificationService';
import { useNavigate } from "react-router-dom";
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { cart, deleteCart } = useCart()
    const { setNotification } = useNotification()

    document.title = 'Checkout'

    const handleOnFill = async (objOrder) => {
        setLoading(true)
        try {
            const batch = writeBatch(db)

            const outOfStock = []

            const idsCart = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', idsCart)))

            const { docs } = productsFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity

                if(stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                deleteCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                setNotification("success", `El ID de su orden es: ${orderAdded.id}`)
            } else {
                setNotification("error", "Hay algunos de los productos elegidos que están sin stock")
            }
            
        } catch (error) {
            setNotification('error', 'Hubo un error, por favor refrescá la página')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <div>
                <h3>Estamos procesando su pedido ...   </h3>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <Form onFill={handleOnFill} />
        </div>
    )
}

export default Checkout


// ******* Este checkout está funcional SIN el (orderOpcion1.js || orderOpcion2.js) en la carpeta   services > firebase > firestore
// En el orderOpcion1 intento hacer una explicación de lo que traté de hacer y con lo que me encontré

// Agrego acá abajo un checkout-1 y un checkout-2  para matchear como creo que iría el código de este componente con el respetivo orderOpcionX (1-1 y 2-2)





// *****************************
// ***** CHECKOUT OPCION 1 *****

// import Spinner from "../Spinner/Spinner";
// import Form from "../Form/Form";
// import { useAsync } from "../../hooks/useAsync";
// import { getOrder } from "../../services/firebase/firestore/orderOpcion1";

// const Checkout = () => {
//     const createOrder = (objOrder) => getOrder(objOrder)

//     const { loading } = useAsync(createOrder)
    
//     if(loading) {
//         return (
//             <div>
//                 <h3>Estamos procesando su pedido ...   </h3>
//                 <Spinner />
//             </div>
//         )
//     } else {
//         document.title = 'Checkout'
//     }

//     return (
//         <div>
//             <Form onFill={createOrder}/>
//         </div>
//     )
// }

// export default Checkout






// *****************************
// ***** CHECKOUT OPCION 2 *****

// import Spinner from "../Spinner/Spinner";
// import Form from "../Form/Form";
// import { useNotification } from '../../notification/NotificationService';
// import { useNavigate } from "react-router-dom";
// import { useAsync } from "../../hooks/useAsync";
// import { getOrder } from "../../services/firebase/firestore/orderOpcion2";

// const Checkout = () => {
//     const createOrder = (objOrder) => getOrder(objOrder)

//     const { data: order, error, loading } = useAsync(createOrder)
    
//     const navigate = useNavigate()

//     const { setNotification } = useNotification()

//     if (order) {
//         setTimeout(() => {
//             navigate('/')
//         }, 2000)

//         setNotification("success", `El ID de su orden es: ${order.id}`)
//     } else {
//         setNotification("error", "Hay algunos de los productos elegidos que están sin stock")
//     }

//     if(loading) {
//         return (
//             <div>
//                 <h3>Estamos procesando su pedido ...   </h3>
//                 <Spinner />
//             </div>
//         )
//     } else {
//         document.title = 'Checkout'
//     }

//     if (error) {
//         return setNotification('error', 'Hubo un error, por favor refrescá la página')
//     }

//     return (
//         <div>
//             <Form onFill={createOrder}/>
//         </div>
//     )
// }

// export default Checkout