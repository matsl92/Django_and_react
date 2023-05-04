function ListItem(props) {
    return (
        <div className="listItem">
            <div className="newLabel">Nuevo</div>
            <div className="itemCard">
                <img src={props.image} 
                alt="nothing" 
                width="100%"
                position="cover"/>

                <div className="listItemTextContainer">
                    <h4 className="listItemTitle"><strong>{props.name}</strong></h4>
                    <p>{props.description.slice(0, 70)}</p>
                    <p><strong>${props.price}</strong></p>
                </div>
            </div>

            <div className="cartControls">
                <button className="btn btn-primary">Añadir</button>
                <div className="quantityControls">
                    <button>-</button>
                    <div className="d-flex align-items-center"><strong>2</strong></div>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default ListItem;