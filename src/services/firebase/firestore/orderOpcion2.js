import { db } from "..";
import { useCart } from "../../../context/CartContext";
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";

export const getOrder = (objOrder) => {
    const { cart, deleteCart } = useCart()

    return new Promise((resolve) => {
        const batch = writeBatch(db)

        const outOfStock = []

        const idsCart = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsFirestore = getDocs(query(productsRef, where(documentId(), 'in', idsCart)))

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
            batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = addDoc(orderRef, objOrder)

            deleteCart()
            resolve(orderAdded)
        }
    })
}

// *** Opción con New Promise

// 1- Mismo problema de usar el context de cart. No veo sentido a romperme el bocho viendo cómo me traigo para acá sólo el bloque IF(líneas-35-a-40) y dejar todo en Checkout
// 2- No sé cómo atrapar el reject (no sé si es necesario tampoco, aunque entendería que sí conviene hacerlo)