import axios from "axios";
import { useEffect, useState } from "react";
import {ROOT} from "../config/serverData"

const useCart = (product) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        addItem(product);
    }, []);

    const addItem = async (item) => {
        if (!item) return console.log(null);
        
        axios.put(ROOT + '/')
        setCartItems([...cartItems, item]);
    }
    return {cartItems, addItem};
};

export default useCart;