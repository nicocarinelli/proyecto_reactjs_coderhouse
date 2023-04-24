import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart]) // eslint-disable-line
    
    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart]) // eslint-disable-line


    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])    
        } else {
            const cartModified = cart.map((prod) => {
                if(prod.id === productToAdd.id) {
                    const productModified = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productModified
                } else {
                    return prod
                }
            })
            setCart(cartModified)
        }
    }
  
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter((prod) => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const deleteCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach((prod) => accu += prod.quantity)
        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach((prod) => accu += prod.quantity * prod.price)
        return accu
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, isInCart, addItem, removeItem, deleteCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}