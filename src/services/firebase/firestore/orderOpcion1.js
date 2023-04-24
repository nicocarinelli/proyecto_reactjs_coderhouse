import { db } from "..";
import { useCart } from "../../../context/CartContext";
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { useNotification } from "../../../notification/NotificationService";
import { useNavigate } from "react-router-dom";

export const getOrder = async (objOrder) => {
    const { cart, deleteCart } = useCart()
    const { setNotification } = useNotification()
    const navigate = useNavigate()

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
    }
}


// *** Opción con Try & Catch con getOrder con g MINÚSCULA
// Entiendo que como getOrder no es un componente ni un custom hook y que, al igual que en product.js / product.js / types.js, no debería haber uso de context providers
// (porque parece que así lo pide React). Probé de puentearlo "fácil" a ver si se podía y:
// 1- Probé poniéndole "useOrder", pero me revolea el mismo problema a "createOrder", así que asumo que me lo va a cascadear siempre para atrás. Por lo que no serviría esto
// 2- Probé poniéndole "GetOrder" con G MAYÚSCULA, y la app carga y todo lindo...pero crashea en la consola cuando
// 3- Me puse a pensar y mi poca lógica de principiante absoluto me dijo:
        // - Okey...cart, notification y navigate tienen que quedarse en el componente Checkout
        // - Navigate lo puedo dejar en Checkout y no jode mucho...ok
        // - Notification también...ok
        // - Cart...acá ya no. Porque tiene "influencia" hasta el forEach que cierra en la línea 37
        // - Por lo que entiendo que sólo estaría "limpiando" de Checkout el bloque desde la línea 39 hasta la línea 44

// CLARAMENTE en algo (uno o varios algos...probablemente varios) estoy errado. Mi tema es que no sé en qué jajajaj

