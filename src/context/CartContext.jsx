import { useContext, useState, createContext } from "react"

const CartContext =  createContext([]) 

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

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
         }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider