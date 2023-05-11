import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const { products } = useAppContext();

    const { id } = useParams();
    
    if (products.length > 0) {

        const { name } = products.find(product => product.id === parseInt(id));

        console.log(name);
        return (
            <div className="productDetail">
                { name }
            </div>
        )
    } else {
        return null
    }
}

export default ProductDetail;