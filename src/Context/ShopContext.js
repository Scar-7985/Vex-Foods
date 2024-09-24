import React, { createContext, useEffect, useState } from 'react'
import Data from '../components/Data'
import { toast } from 'react-toastify';


const ShopContext = createContext(null);



const ShopContextProvider = (props) => {

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartData, setCartData] = useState([]);

    // Add to cart

    const addToCart = (item) => {
        // Check if the item is already in the cart
        let isPresent = false;

        // Check each item in the current cart (assuming `cartData` contains the cart items)
        cartData.forEach((cartItem) => {
            if (cartItem.id === item.id) { // Compare the item IDs correctly
                isPresent = true; // Item is already in the cart
            }
        });

        // If the item is already present, return early
        if (isPresent) {
            // console.log("Item already in cart");
            toast.warn("Item already in cart")
            return;
        }

        // If not present, add the item to the cart
        setCartData([...cartData, item]);
        toast.success("Item added to cart")
        // console.log("Item added to cart", item);
    };

    // Cart count
    const cartCount = cartData.length;


    // ==================  //

    const contextValue = {
        Data,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartCount,
        addToCart,
        cartData,
        setCartData,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export { ShopContextProvider, ShopContext };
