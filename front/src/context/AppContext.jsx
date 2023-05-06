import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export function useAppContext(){
    return useContext(AppContext);
}

export function AppProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseItemQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => (item.id === id))) {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            } else {
                return [...currentItems, {id, quantity: 1}];
            }
        })
    }

    function decreaseItemQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => (item.id === id))?.quantity === 1 ) {
                return currentItems.filter(item => (item.id !== id)); 
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function removeItemFromCart(id) {
        setCartItems( currentItems => {
            return currentItems.filter(item => item.id !== id);
    })
    }

    return (
        <AppContext.Provider value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItemFromCart
        }}>
            { children }
        </AppContext.Provider>
    ) 
}
