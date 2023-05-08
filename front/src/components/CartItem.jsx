import { useAppContext } from "../context/AppContext";
import CurrencyFormater from "../utilities/CurrencyFormater";

function CartItem({id, name, price, image, quantity}) {

    const { removeItemFromCart } = useAppContext();

    return (
        <div className="cartItem">
            <div className="cartItemImage">
                <img className="bg-dark" src={`http://127.0.0.1:8000${image}`}
                alt="Product image"
                height="120vh"
                width="100%"
                style={{objectFit: "cover", objectPosition: "center"}}/>
            </div>
            <div className="cartItemInfo">
                <h5>{name}</h5>
                <span>x{quantity}</span>
                <h6>{CurrencyFormater(price*quantity)}</h6>
            </div>
            <div className="removeCartItem">
                <button onClick={() => removeItemFromCart(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M19.364 5.636a1 1 0 0 0-1.414 0L12 10.586 6.05 4.636a1 1 0 0 0-1.414 1.414L10.586 12l-5.95 5.95a1 1 0 1 0 1.414 1.414L12 13.414l5.95 5.95a1 1 0 0 0 1.414-1.414L13.414 12l5.95-5.95a1 1 0 0 0 0-1.414z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CartItem;