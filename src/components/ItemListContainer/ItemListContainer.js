import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useNotification } from "../../notification/NotificationService";

const ItemListContainer = () => {
    const [greeting, setGreeting] = useState('LISTA COMPLETA DE PRODUCTOS')
    const [documentTitle, setDocumentTitle] = useState('Listado de Productos')

    const { setNotification } = useNotification()

    const { typeName } = useParams()

    const getProductsByType = () => getProducts(typeName)

    const { data: products, error, loading } = useAsync(getProductsByType, [typeName])
    
    useEffect(() => {
        if (typeName) {
            setGreeting(`CATÁLOGO DE ${typeName.toUpperCase()}`)
            setDocumentTitle(`Catálogo de ${typeName}`)
        } else {
            setGreeting('LISTA COMPLETA DE PRODUCTOS')
            setDocumentTitle('Listado de Productos')
        }
    }, [typeName])

    if(loading) {
        return (
            <div>
                <h1>{greeting}</h1>
                <Spinner />
            </div>
        )
    } else {
        document.title = documentTitle
    }

    if (error) {
        return setNotification('error', 'Hubo un error, por favor refrescá la página')
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer