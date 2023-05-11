import { useEffect, useState } from "react";

export function useLocalStorage() {

    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = sessionStorage.getItem("cartItems");
        return storedCartItems? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    return [cartItems, setCartItems];
}