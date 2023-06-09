import CurrencyFormater from "../utilities/CurrencyFormater";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function ListItem({ id, name, price, image, description }) {

    const { getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart } = useAppContext();

    const quantity = getItemQuantity(id);

    return (
        <div className="col listItem mx-3">
            <div className="newLabel">Nuevo</div>
            <div className="itemCard">
                <Link to={`product/${id}`}>
                    <img src={image} 
                    alt="Imagen del producto" 
                    height="250px"
                    width="100%"
                    style={{objectFit: "cover", objectPosition: "center"}}/>
                </Link>
                <div className="listItemTextContainer">
                    <Link to={`product/${id}`}>
                        <h4 className="listItemTitle"><strong>{name}</strong></h4>
                    </Link>
                    <p>{description.slice(0, 25)}</p>
                    <p><strong>{CurrencyFormater(price)}</strong></p>
                </div>
            </div>

            <div className="cartControls">
                {
                    quantity === 0 ? (
                        <button className="btn btn-primary" onClick={() => increaseItemQuantity(id)}>Agregar</button>
                    ) : (
                        <>
                            <button className="btn btn-danger" onClick={() => removeItemFromCart(id)}>Remover</button>
                            <div className="quantityControls">
                                <button onClick={() => decreaseItemQuantity(id)}>-</button>
                                <div className="d-flex align-items-center"><strong>{quantity}</strong></div>
                                <button onClick={() => increaseItemQuantity(id)}>+</button>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    );
}

export default ListItem;