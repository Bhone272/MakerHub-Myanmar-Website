import { createContext, useEffect} from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {


    const currency = 'MMK';
    const delivery_fee = 3000;
    const [search,setSearch]= useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
      
        if (cartData[itemId]) {
          cartData[itemId] += 1;
        } else {
          cartData[itemId] = 1;
        }
      
        setCartItems(cartData);
        toast.success("Item added to cart!");
      };
      
    /*useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])*/

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
          const quantity = cartItems[itemId];
          if (quantity > 0) {
            totalCount += quantity;
          }
        }
        return totalCount;
      };
    
    const updateQuantity  = async (itemId,quantity) => {

      let cartData = structuredClone(cartItems);

      cartData[itemId] = quantity;

      setCartItems(cartData);
    }  

    const getCartAmount = () => {
      let totalAmount = 0;
    
      for (const itemId in cartItems) {
        const quantity = cartItems[itemId];
        const itemInfo = products.find(product => product._id === itemId);
    
        if (itemInfo && quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    
      return totalAmount;
    };
    
      

    const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,
        updateQuantity,
        getCartAmount, navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;