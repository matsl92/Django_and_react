import { useAppContext } from "../context/AppContext";
import CartItem from "./CartItem";
import CurrencyFormater from "../utilities/CurrencyFormater";

function Cart() {

    const { cartItems, products, getProducts } = useAppContext();

    if (products.length > 0) {
        const cartTotal = cartItems.reduce((subTotal, item) => {
            return subTotal + products.find(product => product.id === item.id).price * item.quantity
        }, 0)
    
        let product;
    
        return (
            <div className="cart">
                <div className="cartItemList">
                    {
                        cartItems.map((item, index) => {
                            product = products.find(product => product.id === item.id);
                            return (
                                <CartItem 
                                    key={index}
                                    id={item.id} 
                                    quantity={item.quantity} 
                                    name={product.name} 
                                    description={product.description} 
                                    image={product.image} 
                                    price={product.price}
                                />
                            )
                        })
                    }
                </div>
                <div className="cartTotalSection">
                    <h5>Subtotal:</h5>
                    <h4 className="cartTotal">{CurrencyFormater(cartTotal)}</h4>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Cart;