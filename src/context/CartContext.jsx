import { useContext, useState, createContext } from "react"

const CartContext =  createContext([]) 

/**
 * It returns the CartContext object with all the functions to handle the cart
 */
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [idGeneratedOrder, setIdGeneratedOrder] = useState()

/**
 * If the product is not in the cart, add it to the cart. If it is in the cart, increase the count of
 * the product in the cart.
 */
    const addToCart = (product) => { 
        const productIdx = cartList.findIndex(prod => product.id === prod.id)

        if (productIdx === -1) {
            setCartList([...cartList, product])
        } else {
            cartList[productIdx].count += product.count
            setCartList([...cartList])
        }

    }

    const emptyCart = () => setCartList([])

    const totalCount = () => cartList.reduce((count, product) => count += product.count , 0)

    const totalPrice = () => cartList.reduce((count, product) => count += (product.count * product.price) , 0)
    
    const deleteItem = (idProduct) => setCartList(cartList.filter(product => product.id !== idProduct))
    
    return(

        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalCount,
            totalPrice,
            deleteItem,
            setIdGeneratedOrder,
            idGeneratedOrder
         }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider