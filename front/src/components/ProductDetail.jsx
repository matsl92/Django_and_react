import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const { products, proxyURL } = useAppContext();

    const { id } = useParams();
    
    if (products.length > 0) {

        const { name, image } = products.find(product => product.id === parseInt(id));

        return (
            <div className="productDetail">

                <section>

                    <div className="productHeader">

                    </div>
                    
                    <div className="myCarousel">

                        <div id="carouselExampleCaptions" className="carousel slide h-100">
                            <div className="indicatorSectionContainer">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 0"></button>
                                </div>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item h-100 active">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                                <div className="carousel-item h-100">
                                    <img src={`${proxyURL}${image}`} 
                                    className="d-block w-100"
                                    alt="Imagen del producto"
                                    style={{objectFit: "cover", objectPosition: "center"}}
                                    />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                    <div className="mainDetails">

                    </div>

                </section>

                <section>

                </section>

                



            </div>
        )
    } else {
        return null
    }
}

export default ProductDetail;